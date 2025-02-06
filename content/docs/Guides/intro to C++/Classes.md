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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EYYAQG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEOULiQFBnV4OrHQU2yjIj9caWJHtM%2FPDi29S4sJ5X6oAiEAgq4CBwp1RZATxGMNYxDxx9zuSi5bva3AAGSBvP3pXswq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDM78iAIn23zTaDfsZCrcA1oWikGi0HJ0WXcFVE4btK%2FBXNOpFhl6VP9BeYCyfhAoeMKQH3nWzHBfew74dzkAJ%2FKELt1Eq8LZ9NtdNEWlrLWD6m4hj%2FD%2FzlPTkumg0ej2o3w1Egm2MRXhI%2FF3muDAVoaYV2jFlvbcHsfQQa0TTjdUWuK9HUUDHT89%2BWaGHfSIN%2BdVd5gd%2BsEq3ihjatpzaJkhoCT0F8afsB8lQ6QV6nPif5qYeZQwSbiK0wtypPupRUWcuSH9rYSEgoXDKWo0l8i%2F9NwE42jEvD6Sj3801t%2FdxVKGd%2Fe4uXgVEHtG5tcI5ZvnkJWO7o90EyjMwYqBZt3dh0w7b55rFntycvZ3ezBVqDuEP2iN%2BravvmaOamR0UecOOAl2b3Qo87UuAZvpn0CwE%2FPJkXCdO%2BqBiGwytMXcUaMYoYmXswUGWgkCIQCaNDfaoajLQPC1378NCJrwm3GyACom51f7yDxIlBlfdEdOaGy0%2BCYekIge0Xy%2Fvjn24oeGwqnfKKPvegQeTShNPniQMhQ%2BhkEMSOoC4Kjun6VZX8CRR3EPd1fgPrLyM5Auy798PiZsqAy0SStCGbyDI9Yll%2FNa9%2FQBIgw2S2QmH5CqziRlso2luE6lP7r%2B0XFnMi9x3Bl4Nw0mq%2FpRMJTUkb0GOqUBrgeaPnju%2F5SnJWr7tpekQOR13P5hMSE4B0sWTSozvcBF5YVKWISopgJqHTVrwrsrVJu6uIy%2BEtgrdYvXg4v0O8k9dOJ%2FmZllTW%2FFE8aOXnncTNoUHmXiaOvbwM3J5RdXZ5Ad2oQfoW4spNkietszy8DrOLG0n7hWnjGgU3gHbpwPqRiRVOVOC0h9OVhrjGlam%2FBBTzvuoltiDlexp9JhUaWTtP8j&X-Amz-Signature=a4a41ae9b0d051d45ba7c8f8a930957c4d3d725872639cccad9822319748f25b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
