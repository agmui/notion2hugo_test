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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6A442JC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWA2AtNaD1FHoWIBMbfENKmB%2FtZCjmvp8PEWiwRl2TpAiBbHpLyCHgJ9VMr8qywTQwCnBczEKGy99D%2FCmujf5hNSCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBwQbu%2Ff%2B0%2BECzccwKtwDDWOjRb0kGnaz9ajGqepFZjemPZZOrIYopzJ17vmCsx7VJWYJdhNndWQo9tFbP3b8EnH%2FrrrnETFKb%2FG197uFVvoehoWw1mpOsQYkiPNDbm8CtSbwLboBnGm7WUuNE2wIErO3Aasd0fG0kTIIMC1HAabhyjP61f9snJYiEU2PhcLDPsGC5lV5wKVHeg8D0%2ByE%2BieCvucp4fQzghXRsjLqdvf%2BgaWurIrduo5xPozR7WD1fDts7OHTVi0KGtUGnQQQ8QxWIgmpvaCInLiD4mBM00Fn8KHkkNIF8dozeHh%2F1LG5i%2Bm8t3QyZDO%2BxzJ30QVw78mFL2ifUdjclfvavpGSvfSVQL3rCzsCVEFuxXHV%2BUXZfWbzqRlJ9vaNIrlXJhqLMJssBHDl3iqgDSeX%2F%2FmUcgJFbgRSqqS3B2bD5Jrwt6z%2BTL%2BP47WWBKxHgywM9ugmqAAW6%2B0Un2fFf%2Be3%2Fxr5mlwR9WUl11uZilQSRUpe02x6yVfPYXFaV9f2KOeKJo2E0SMa%2BfukIwqKVwI4r%2Bs8%2FUWnZBrE%2Bv2Ogn3vkAPfYZ8qnVn5McavR4pUP0Q0bkKf86IXBtFeEpf%2Bj%2BS7IbekKhqQyAwHv6AdmFLa2qV6jIXXPm4M%2FrppqFLioYgw47nQvgY6pgFIiLqTaAEocn0jcA02SI9xOrw9VXvVyc1orve3cc5awt65kpWxjlYJmaDpSlccUpe7U2MqcnprnZ6X%2Bq%2BjNT4AE9XTD8rZ5cRnoXW5cKCaYZz10louyGeaH0MZk5xvUU4S3VkQOrK4t6kSxeEcjVlJlyai8FV65HfYNr7%2Br76j6DY8ucxCpNTmzFK8pg1tQxc1FBZnLM1h23weGvP8GrMRwT8HdMtF&X-Amz-Signature=b1b4c81866364954df2238586a0c29f8151ff91e54b948afeab9236f64850ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
