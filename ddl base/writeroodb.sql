-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: writeroo
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `story` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `content` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (6,'Arrogant Suki Wu','Christian Rockatansky was thinking about Suki Wu again. Suki was an arrogant hero with handsome fingers and beautiful abs.\n\nChristian walked over to the window and reflected on his derelict surroundings. He had always loved urban West Boggins with its red, rich rivers. It was a place that encouraged his tendency to feel confident.\n\nThen he saw something in the distance, or rather someone. It was the an arrogant figure of Suki Wu.\nChristian gulped. He glanced at his own reflection. He was a peculiar, clever, beer drinker with skinny fingers and red abs. His friends saw him as a pongy, pretty patient. Once, he had even helped a nervous puppy cross the road.\n\nBut not even a peculiar person who had once helped a nervous puppy cross the road, was prepared for what Suki had in store today.\n\nThe sun shone like bouncing rats, making Christian anxious. Christian grabbed a bendy guillotine that had been strewn nearby; he massaged it with his fingers.\n\nAs Christian stepped outside and Suki came closer, he could see the loopy glint in her eye.\n\nSuki gazed with the affection of 6357 wild old owls. She said, in hushed tones, \"I love you and I want a phone number.\"\n\nChristian looked back, even more anxious and still fingering the bendy guillotine. \"Suki, I don\'t have the money,\" he replied.\nThey looked at each other with anxious feelings, like two horrible, hard humming birds dancing at a very charming wake, which had flute music playing in the background and two patient uncles cooking to the beat.\n\nChristian regarded Suki\'s handsome fingers and beautiful abs. \"I fe the same way!\" revealed Christian with a delighted grin.\n\nSuki looked calm, her emotions blushing like a boiled, broken book.\n\nThen Suki came inside for a nice drink of beer.\ndd\nTHE END'),(7,'Stable Alex Parker','Alex Parker had always loved cosy Falmouth with its kindhearted, kindly kettles. It was a place where he felt worried.\n\nHe was a stable, creepy, beer drinker with hairy eyebrows and charming eyebrows. His friends saw him as an aggressive, adorable academic. Once, he had even helped a tiny baby recover from a flying accident. That\'s the sort of man he was.\n\nAlex walked over to the window and reflected on his derelict surroundings. The snow flurried like jogging foxes.\n\nThen he saw something in the distance, or rather someone. It was the figure of Fred Cox. Fred was a deranged coward with ugly eyebrows and blonde eyebrows.\n\nAlex gulped. He was not prepared for Fred.\n\nAs Alex stepped outside and Fred came closer, he could see the relieved glint in his eye.\n\nFred gazed with the affection of 9797 rude high-pitched horses. He said, in hushed tones, \"I love you and I want peace.\"\n\nAlex looked back, even more active and still fingering the tattered knife. \"Fred, I love you,\" he replied.\n\nThey looked at each other with jumpy feelings, like two forgotten, fine foxes cooking at a very ruthless Halloween party, which had flute music playing in the background and two articulate uncles drinking to the beat.\n\nAlex studied Fred\'s ugly eyebrows and blonde eyebrows. Eventually, he took a deep breath. \"I\'m sorry,\" began Alex in apologetic tones, \"but I don\'t feel the same way, and I never will. I just don\'t love you Fred.\"\n\nFred looked sneezy, his emotions raw like a happy, hot hat.\n\nAlex could actually hear Fred\'s emotions shatter into 3748 pieces. Then the deranged coward hurried away into the distance.\n\nNot even a drink of beer would calm Alex\'s nerves tonight.\n\nTHE END'),(8,'prueba de put','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),(11,'prueba postman','prueba en postman para documentacion');
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-02 23:23:25
