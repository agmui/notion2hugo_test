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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBUMUR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICpz9XU0PJ3oBKfGVQLFXUZMMCGfDfT1GyghNh9re6WVAiAh0q9o%2Br6118mm3Rt%2Bmut5z6OeKcGz2c7Tms4VAC0UvSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM2nj6aMAllLIiv7nrKtwDcnkaRSBu3IVHiMaErg%2FYmTLFyN%2BJYN6T7FjWLJ%2FhHU0tKJ6z036%2FumgIjuDhs3MBhae4KSwRDZvoi75X%2FDXFvUzXdt%2BzrHwVjRwchDKVBcETt41p9m4A6g7EkUCYwICZyXqjfTtn%2FRvjhCkY4LVDFUGxygYAbZgEg2KUm6pcAetIheCvKkTPnBcTZSqBpWo0senykM2rIQiI5G3x4YoEsbtsCN0jge0OXhzUsB%2FSZQmEMm15EPuW4F6zV8a%2BJGRFZsqIWw9Ko%2BmKj3G5WlansGTq6hrB0%2B55o%2FKoSAkbGUijYviWNY1CDH90ndoMXK1irtsX6Io0omWrNo%2B7cf4EkTbcbipKX9lnxrTVtlTYOh3CEzvxfb4IM2%2Fip%2F1FZghW4MHA3Dtc3GxTvastpK8e1G6XZsd1jcMXPFaDovO9%2BzzzI4Rouckl0r2TJsr44xXI5c%2Ft4Ip88BZT1AZsIAyzhM8PDYv%2BHA5Qcmbf8s%2BDs0qE%2BzVskUmHg65kl5GlI00VW0FOKGeaFAGUMV7oQx1kNBJbN%2F1Z2IORh2GqKmb4kj2eaFZhbgR2ccwxOYQG3EgzIe4pqmC%2BiDIXTr94DnGD23M8iawxkk2AnML9xzJNp%2B2MdTz8UsL3u79JP2YwkqrywgY6pgFIky3Uii%2Bp0U6WjQ0TRyc9rYiVcSCMilShRRyjUjWTIk5JOuYkGCyPDaCmTTtZ24gIo049Bh5DACm6C69eZ3NaYYrWfwo%2BlG90%2FmXNrc7ZTURly8BEWgMmgo4QqFjPSHIlvkhYYK3INSLLbBKxT9fajmQlmZ0uevYYTvZI%2B%2Bbg%2BbMNjvweAw01RGpBSJsVYejsUWNUN754rC87LCmltGohhrAK7sK3&X-Amz-Signature=3bcaf10689537846c4d7b7e7c828fe3297da8c27a34a43d6bfe22e931d0ffd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
