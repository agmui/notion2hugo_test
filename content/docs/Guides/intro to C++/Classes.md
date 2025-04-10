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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQF3B7KU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDDykKANSxUBHBqhrQNraKL7bu2cdSojfGgstO4Q%2BRKKAIhAMzk6iUxDXNYm%2BvtZATAxSOgxCjN4TGVoyFIy3B%2FDsx5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBWDgmOAiP6OBaDJUq3APZDj3O2cJiayiupfRIMqbbxt0sufbpiM%2FP7zTR%2FLllIWyaOnTQcKKGSn92eT6jVXa52dlVrXOKgBpBSdfF6DzCQDr38mReQ0bG0Zhp3QNe0ku6bZc4Mbct9D8wL9R8w2ULM4b%2BCecKhrU61aMS7hgrUZfs%2FRC8jbalwp59vvcAImCsOIE80MJY58fc1VEfQW31K72tiypFK9dPftpfTKUS2t8nP4ZjqAR77nnsNyD3xNdgLpWvaikmNX7DJxGzXZ6knDjsoyq1pRnmIn7EiFCFt%2Fb4Y849nepylJfnO1eDKx26Jl2Tn0W0O%2B1pglFXYv06Ao1Nlp4ipU5YsDrP62tx5hvKfWSy%2F7gWpFnznYNsHB8SbMpsvWztDf24%2BHasyg70QG4vXyi3wDBLeryAQj%2F7v6KJ9NhuFVI5mA%2FwQ%2FWPDQAcoea2X0V2Un6ufExA2NwIikZoPjNohd5Yp7NeK8T322krIZbUGr%2BfbHbUHfCL1OwXC8dZs699K9uzeWScSKnTFswudunHaVtXovRFBmauXrAyS%2Fp5j3tpPAILn53p%2BIUrIhdfPUKICviDcaAEX9EFc1ng0E8oZ%2Fh61z3aRmwUcAPIYZKJ%2FPdqAt1txipUKDFu0wyflCNhZeYR%2FjCXit%2B%2FBjqkAQyocc98OsGQJCSizms2ss6wXYC05WtjiWLQFp834AhS7naSnq8q%2F%2F3NjFErpGsXuQ3vTtZauQD3AeQSvYBtFUKdg0jZGFHY3h3awygtOHSJ0FnLKdp3bV9gmU7c5StkzN%2FjFKMyBqkChaKWzXZ9mC7m%2BcDH8jZ0A%2BzLVNYzeCKiDoE9pHiOkJojY6lDXTldor1iDg%2BjxlkztLezznVuYS%2FcXpTc&X-Amz-Signature=071891280f4ed84d8a0e2a253f15675d9e3eea7281507e096ffbb2d85d531ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
