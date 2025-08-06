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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYZSDPGU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHi5rzvlJ1HEY4ozq5Xz6zOBOuSIRdBopfUJpCn2FaLgAiAyF29rUPWqJN8MQsHr%2Bz0798viH%2BRGOP5c5x9%2BFIH1cyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMTs5dhJaflUB8Rh69KtwDi0Qwvsce%2FnOy8gJQ3Mo4q6of5kcpAPoRZxmowch0YRJs7otar8Zh5uCnEDfyNwhCsBdolYAs3vylVdoeZDsqlNdRU63c6kf0FbzQBR8zUhsK2LnMJKrHyY9f%2B0KQIHNo9h%2F1qwknglanImJPjz%2BIXpIjhIOxEEebelMwADM5habuaNatxOT9DJDuL%2BuC2QkEo73N6hn%2BCvRCTFb%2BExZ3leN48k8Pr1CygTm7Jdv2Znj0DFlGQIF8dWJd6d4092zjnz38EwYmgiXNGLm8S9WP3fnYNkdsQi8pD18J7uZnVUyhY6E64F1DVJtpg7LtbDiH2V4wBarFqFTqo9NRDaS6WoIJop1nxWg37ihJCDzqSVa%2BbrHVb5aiQMCu2fhXmGsjdap5jmcCy30mMz1FHOs1d2iG54uZqDPvLYOjWhWtbzfGFMXhAXTS1YtnbgkK69QMLz1qESXT6HlhMNC4SYC5mlZMzg%2BcJPO%2FRQ4CtVdDg4rrPaqSVKVEREjS06w%2Bx5jkZtOu2VmX5EKRmbGiIzP1MwamtU3mxtdWbCDQCxLchV0XFz%2Fj%2BQHLXOLRiaCWawhNFrO6cPvyZr2W7QMkKuAEa1Oy6bV0685w5g2xlGW0ERddQFjPEPBfQMZ0tKAwzO%2FLxAY6pgFUkUVmwM2GfHQei9pVWvaloWTT%2Fc2wHKFkBvfCWFvt1VBydbdqo%2FDV2y9S8mCSETVXYFVf1woeMkaXtv3pfvEP6LG6X%2F68%2FHGJKXRzLmHgo3YyK7Rhn079vH03VidYxboYogX%2BcntDn50FcEMXaIA9XNS3iOlx1rKlOFSMEk3gJLWL048KfnZ1jkyg%2B9%2BrhOYm8msbntqOwBZ1td%2FkoBcFADWXoD9s&X-Amz-Signature=8ab933abcb5fd76ff26eac5a183800603b27965f8e7c6279c61a2bffc3356eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
