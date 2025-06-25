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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXVCBV5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCaTyr6juvgd017Q7Ka26NhdIZHq%2F3FkfyzdtotcApIGQIhAJFwJw2TQ6VqdGjeTzm4%2BLh484tqHF4%2F94uoE5OFL6bgKv8DCE4QABoMNjM3NDIzMTgzODA1Igyc8lLWUHRPOP9jM6Iq3APUNmXdytfuwC3PB%2FcDNcTsAvfKbOpwGsQbwn2g5AkBfqDm%2B3kW2KFtbQvDrS4Xlp7oY5mEAEII%2BC3okSQiLE7UC7nnmFLmIYlchbCwKt5nUMP59TfyKETORiX1l9XmDNODr922G%2B%2BolJvoLyoF0J%2FJsdOzuxuJwKw5UiWIU15TAgP5tDJyN0CuBwYAjSi7Ak1A4%2BX8jqaAOPNMrtDmhIVM89O6AyM%2F%2BkzAqD%2FwBaA45HlWBeebH3YYEsJ9tnduLPTkZM5sRxfeQVbe3vXBLM9dTzqkOh1IYllAFnHWWHHZwj58hw%2BUIFkP1sL%2Ffl12vHA%2BKY99rpt2mrd2D8nRtMgY9VfQohuHw2eGQ5bA%2BzVMB%2F3vMALuGHsWgUuiZG%2F499KUzqC1Eql%2B7nS0UQmKkutnslDHjtXU%2BkRSYzIk9KW6Ci3GavpWMptkKBwX00aI0SHBsnBEN159ZNjgLJw09FHfx8Zh2LNaiwotDtl%2FgvM6OhNAdHy8WQUjvnlYRPQ35zJ3n8Ueg0M67miKtt2TM9zzgfy%2FBVUSx57g0WCqWSVbupfkcoqSTAbfi2Ddl7vYYvNEpF7uZAxJ24nM6xAqatv0g%2BCqaPUHYJ%2FRermzwFtdW6uDKlhV11qp6fMAIjDQufHCBjqkAdQM97vjPr1LV0OVyiUmPQHvieFndIZU8X7PGNj0JghdHZ4s0nadvOIodTYGnOT5BdNayiwM7ZJZYrFGCvIbqgUaPPoY%2FWCS4AJ5Pbhinv%2FQxMVAkn0Ii4BmgHgPG8aMcm4t5c%2BtViG0K1oeY9s78vpJOFkZ%2BONLUWc79PN5MsgzdFvoLiHxMyK%2B%2FVdX2bn9sVeQylbwju8MDM%2B2LFBlm3GDfR8U&X-Amz-Signature=e445cdf99b4164ef56ed384930a5a47caac1c50f7638e8dda2dee304f568903a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
