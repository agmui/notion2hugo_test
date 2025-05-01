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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HADDJD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCePJJVaUTukjgS%2BjC8DxrR2crSXqgY1AUL%2FA%2Fvh5wKjwIhALPOBiwp10nhcd%2F7zYTRegedes18HTrxsXwbN2G7RWMoKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgIVTutDAToARj850q3AOe2miz5rg7a72mNwtwTTxX3Z5d8Vvxy5jlb3qOkIF%2Fk4Z2NuEyUGrGNut9I7wPihIJgiD9mQHtwCxU0%2BwtFEaA2dqeRZOLqdv7bXyJMSwmWZR5SavjTWwoCnxX4gdub07KAJ7Ztq4IawBYAqrHXZ8gC43VFaKyqEyu%2BMOQgbiVef2l7eP6NfXTmzRmFlfzONbZmfVQQkhFkkWBmiVo3KWJH5lgwVJ1eTTx0hfwQ%2F7Qrw39S%2BkneWGMUFrSchW%2BwGAbNLHCjFC6MjG7HuCVMpCgb%2FTMRnky00gSLQNjsXCvoQSsRktEv7%2FfDsUcR4I03ZI9EvMKuq%2B%2BxY9rug7LdUcZ7DsmAwLP31RjUicoLMjFfIMOYtvxdikxsGFpGQ%2FXzNyGqmHltbn1T4SAV0VVhLlh%2FRs%2F%2FnrrLvh5qRte0KUjRYD5AR3ePvMfsdr%2BxU6eVMBhhdkqr5zglhDnU1CEJI%2BecOrEQ0XS4XNdbEwcNweeQd%2FMtz87ERnty%2B70gXe6czhupPybFAes81POzy57sKNE0I84JRUVxNw4ZS9ZIVQb2YbsKIZ9%2FZA%2FeW%2FVu8eSjciBPgPgkvSaa%2BF%2FY64hacacBmZX4qLUIxcWHfqfQ%2F8lyP37JgDR1BD9sxam%2FTCYoc7ABjqkAdw1AfizRtXJ5PfIOSZGE7%2BDixwKqyuAk9nPetBg%2FRe3e%2Fk0TvuLiDG2iqEk7yULoXXsjC2hF1m2lCDgZinUb8Dhp4tNBoSGrTWb1xzZYtHiyE966x6Ij%2BBWj4rR40bHfHJAOgR9dOA3nCd%2FgNtYBHNieICp%2FaYfF5Sd9fbIJ8c9G8PjXZBhx9Qs4jLqJlD7vrsKDVkKA6n9WaAzI4YQR0QSIFBx&X-Amz-Signature=a74f931dfa878bc3c2eed48b3fe9afd7694acf6c8e0a486d30fb9385203abbdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
