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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLNKACC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDCwZoIi%2BJNQp2N5XWtopIVdVi3J2el9xWMjOCeWXwOLAIhAKvoMe%2BfLgVF0UImN7lBiYhdfoDjWGA%2BMAzfaeC7PeuOKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBmBIdac29nNiQvO0q3AOQkA7ReSXsi2UjTd2rPlnlAdlqkoLVZ%2B5s1YN0Lbx5c%2BfZnhobRVW5G24xX3AxwH883t7Q47XeuCkbxMs%2FDQJgb1A9vi9at9SWgWTUc%2F7ZJltq2IRQhhdG%2BySIhJVRXVWpV69RFAf0iOsk2bkMI7L%2B3gz6I0TxgLTP7hbZiPuW8ahe7jJ4bkK4vTsMbEey1SLERuSXs9MIonAcEoSjO2qc%2BV5KSb7PZ3jELHP%2BH%2B0%2B2v4mmsrdazKOqZttVjRhHBdoIzSMdGpGpXgNp3%2BrohsXi%2FKN%2BEy2mi4a%2Blukr9Lb5io6Hsas0LbeB1SYSlyqLSzaIEgY1sTwzA%2Fpm8LWWSvuPWV2Jtz%2FSrGTFUEJ7d%2B9EcomMdfyO5tyMziItGoOtPsDUo%2BQtSdhuk9fTJAotpaOr6A3o%2FjM0fP1%2FqgmEy56330RWQnJhrzJfmcEkINH5G4EeRM7G3CfGt9tEewPzxbLzmTaCXe37a8KV%2Fwmaa4M8WRhB4TOibcJRPQhuY%2BqAbM%2BuB8GHYqBQ6Ac02i5tytuick0A87X7FN%2BfphpZJTM52z1ptYoOfeHSX4VYnbNkISf58rGe6PwBgZngL1%2FC%2B6gLDC7VR%2BverfmMy24Dfc3OGoRQLsVoDQ%2FGmWc3DDfgJfABjqkATLw3PBLvZqyMm2eRZKs1APfZKcqjOi6US59jkqYDex8%2FpbFZVU9dIB3dRmqZnHhyPlRENcwn652Kzn9VftaG4eplPTH%2BAPLgc4ExxNRr6qiOPXfaNRrecSb3P3GEupoOmuXzySe6%2BlpoD%2Bb%2BT58gwiG8l71l0bHEWbJUhByIATFsksAyIqlsbRXnBU1jv64fhdsuyR1XtoYKd%2F2q1GEOxHmkCLA&X-Amz-Signature=f7dbbff07a98e29c35969d631ac89b123a5f66ec542c426d83c1cd997a6bb5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
