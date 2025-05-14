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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQZOIDQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHcppYs8L7SNB20nzzPas1eCru%2Bqd2qvWNNNP9xODm5EAiEAuZv4EsqvuDDpC8KNFWuMe%2FTE54QXzaIIkouAU4afx0MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEyFTtPUI9dS6jcJCrcA%2FadiSfaKd1WNIim9rgeMj6vtdox97o7neso9yZ%2B3y4PngytREyL4CMUpeXDi5AVGoJUl7T4NvLqc7GHMpL8cNjw4IKQbDvnqosTG%2FhEeyMdTCpcOT4F1tJsCP6tHuKkBhW3QhSqTfCXeL2qJUbSbTQZtvObqnNoyGseb2UftuAnSoS3VuM%2FDwFR3KsRcbhvuOgQZNU7QOY12h7CKX0SegqTHyVM8z%2Bb6YM7VLkrIryPG5UvmhDA43NJd5HWDllgx%2BZ2yrEHM5JLIKmE41pYvXBAiKQ2mqLxiFcWoDb3Eeldam%2BuRtDVFcK4VtrnXGj%2FTP0Hvy9ZcuN9vKwpLXZkU5xSTUQxr3r9H0PlIYAMhqTwkSlxYVvui3ugWEBnqvebCuDE01I1eNdlpj2Gnsadmj3yJoBGT4VSNN2S3uJn77eY0%2BG%2BxvA9QlLWgjvouKmlGxj6vIqERx0f9RUjcTU%2F9c%2FjXEs6UMyseuXXZJw7%2BxKXMCC%2BsmiFQp2lFfOvW9fXDyoaQImn6nU17BZjVVy3es8h0oZS8NYoJV0QnDGmmxmRCuNCvpVuI3XhXGmNL9%2FPnSvjoBtpg%2FltJ7YiO6QN5b5EqH6wns20KNqMX51JzLaxwuRUuTumx1hatK0iMIPskMEGOqUBjSXp%2BEtc02icAaBt%2F4uugsKH0Qgq8AyVxFzCnOTi7PThY4FAmLUIM8Xo8oAP6vK1mkVHhGqVf%2FYtKt5OvEFSAoLW4n3O7LzkWALkKyRGkD%2Fca%2ByASTZEDdTXCDCAcbKtpQfUcEkSaaRvjvx7oMaK6vUBX23Qt7B3eTWCXJm8Jtxep0PYRMt8Nc2IIXTJ0nOnb6EZbaexpM6UNS0MZ8SGbYmoJ0vo&X-Amz-Signature=0ba0995162e845817458a3c11d31df47f1810a592208c17592fcf810a9a8da8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
