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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WION52RN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbeRkttEf71QAX79UZ5h3SCvqzbzO9AkzMlHpLqO1KwAiEA1Dy26Et682nDz2XVvJKG4NPN9WxNbV%2BbAlO50PPkUQ4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2aaNRfk1ycVM%2FhjCrcAx%2F37uyyAUjvZmbf8uSZM%2FcxVwQ1aiG1sx9CvvQn9H8MkLTztv7k5r%2BJ0f%2B5BZf6DjmpCMHCKa1kVTbvLwaa4VOXfnQhU9VLBGWdfGfXw25zTlvCZyyq2VAuyJMMg0OFGmhzxCdPjbvm1H7SRI%2BIezzX76qJstUzqyHO1q0lCwnja6gEY%2BBPjrt6FHG9GqFPZaht1xSILsp0UEjMfMPaF1YIkeIz5Rqa4rb0m3L5gYOpOavWDEy8Lf0UwMO67%2B4QTFxIUgmrzXYjgEnycUzwKtEQB4oYoRnSd0X3Ms5S9NVGFy8rZxl1eN2fG8Eo4XvLu1XGDAYatsmjn%2BIeEGkpQHBeOp%2FxUGudbmyywYP6ITunzQI3wRR7sNi86KN%2F6b41zfwCBmvcu5YvMAr8FhldAZnbphVqeb1Ebw5rI2GKAn92iL9agO5yLYQ9JDdUSyyHrXV55NDrJS0Gv3kRrgjxt6wqoxU6Z2R9wCJDu4p%2FabyBEJES9t7m9t%2F%2BYj6JPPKsGUusPVVZBz8J9oCfEMLw1v7P1vu5kbQkZb5aW%2BCuQxYeEw71oEcwacwxItulnkjwYqgeHJjnAMihdUcziXaJxb6wGOSlfOEORpNXIlcfWHV7KimN4hV%2FomY3mPh1MMyWlb4GOqUB5IyKYCykdwUcoNj%2F7dqLhNCeiZQjgm%2BMmJIA5vM7cZdRcuUH7bfTsWwZCDlFL96tEjlqamuWRtUfuMVTkEUHb6kNXiGbYde%2BRjuyYrFjN9rR%2BflV3Ochwr3K4c%2B92YDBTTWnRlN4hgvBcsRo50MiUkWwiDg4o0Oestk7G2V9I%2Fa7FTbFaRh0Gh0aCTBL250bBt%2B4PaeW5sV4iW4J44yHRRIhxpUl&X-Amz-Signature=8c3dae53f057be388e984ce48f0a6a19e549385b032d364d162693238360d3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
