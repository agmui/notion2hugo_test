---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6UFDHUJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHVtFX11sxQZJSY1b0jZN1yQv4W7TbFTg0yiGEfGBgFsAiAtqpQEQTNz9uutOz7fernU0gpZ%2BUd%2BVaPNxz7KlCIv9Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMvjdZuG1YV9or2UCNKtwDIGX0QKN%2FsClQ3K%2FPa1hESO6oF3e9tvD4374oBuZDXNze6U5Ynn6sV0ox4u5bLDEREJ1f%2FQIBSVO4daICOxaV1xO%2Fwmf4RRu00Z%2FthnP7OV1IPOvhPojmDMHIskINLrw974bBx03ujVtmsg8X90AwvZhpuPTP5IKEh6%2B3dgPqtjuCyUB8xHmNd8T691gx%2BRIujp9p12nWsKAB%2FYg6V9B94SmedSXhQjKqtCBTTpyFSUWZEBkqwq0ks87XVfe2SqjKch5sGq%2FT3Z9aD%2FXujY0D%2B2E%2BNPq%2B2S1YKpTg7z%2Be2vo9Gfglw040BVEoIiI4AhyFdGWJ2bGz%2BIMRffJ94hwg5GqZByOCg85KMzWFGgVLZCHlP54IDoPrj2jHkKoikpersTvFKySGJAu0uie2gDBX4QroMHHnVeepVD4jC0YhTANPcL8ocFmt00x1nxuYtMVWRtO3NiN3whGazfqy0WC7yQwYesOJ0nmKWbqB7zem6S6Rn6Xxj4y8wfZkb8P1n1aEkqkAYUslRA74RL5W%2FJOstNiQSJjX0rx57XKgYPZkV%2FCBiSXVXpE1AfWda6gAYpxFDZBAwyFgBpyKDeXF5YF3jtpe6MN4kVeQZhKdsvQYlPo2YbVDsb%2B9%2B4t96JkwkfiAxQY6pgHpKomBHHRFRe82PxRNkdR0u9%2BcEf20LzgndK%2F2QjOdZb%2FDaaIHIYyzjO0aG7zUZZsBwEJHbAEHeWsFmciobl9i7MjSTGKP1LATaO9HLthKDU%2F18y9sCSz0Z2Z0%2BuVUgRb1yyrBbUX294P8BRKZY3EjOnwpNglEGjGTpvqjBTBp61cb79Ptxdsi%2BrnSsKD2zqB5zXttLaVUYUlgpPg2BZeHfVH60%2Bea&X-Amz-Signature=519d03a41f2d06ed11a2faa7d98d33be0d8ac3405ee900061c0ed3c5cd182c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
