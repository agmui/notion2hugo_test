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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QQ6RFC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOi3xyfxS%2FaLUOPLjNXP0AqWa%2BiCDgNQSvlsCnYANOdQIhAM9uhPBLy9MX2UI5rD6Pm%2FO13Qe8JbUxen67o6s%2B0jpOKv8DCEMQABoMNjM3NDIzMTgzODA1IgyPuT7TXy94AVoaOO4q3ANzLcSPz%2FdtoPdF%2FK7EKHTU3wCH0RSNKiVPq3Iugw5BghIJrko59qBns5Zgzwqw%2BajqkPeCxuJEBpHQti42wzqjIqTZP%2FBfjz70cHi5bW1FUb%2BQZlbpkyekwS6E5dhAQJQaakEM0RxFPPuqdKISSOzVv%2BW8M7GwgIptDECA6%2BIzWt9gQUrct5mG0%2BsAjloVwTEvBorAhrR%2BbAFvNBJFkGIB1R%2FSf7QG%2FYR1qYIlaTtm8sCyw1EMKkmt5hxtd%2FkGkA12CuuAiYNPZ0%2BlAGBhAdYZW0670gewgegZNJHi4xCXkmIZSBHXoZekhNFb3ht916MseHmwjEDyFUeGBXLyZT6ZyQU6gg7pwPOXzkwkkQUPPBHMm68lBI46%2FJGPpOu7%2FuSqhQKXlUeuG0dLismgSgvWPuiCuXXrxVU4fBZHTAmnnMh98H9kyQdP5%2BIkAQjaBk1o8vX66tNy97cUY7X3HxgswPt46ZutIvacgT4Xn3G%2B1SL4IWnWF4nhgFn0L0AI5cFHC6Hz3sQgDcuUWqw47Qfz23wjF8wzKkV62aAyBLVsm%2F4PlsgSvL88fI36XTFmsqqcx9Ptol6%2FlR7LaGZygTZeBGIw5GqRJyAI2uzSWsSSUoxQka9jzm1lmGsJ6TDf9P2%2FBjqkAaTCHmMIEDfNrwoDp%2FCMfUMBo3%2BETQCNhmdWBukDLqoL1qf%2FRXFGbO%2FOAMfTXrycUAkmHqYlQ%2F%2FQ6IqW2mV8UPvKsXBQoVNxxHPjkQm9R7sFhTCgpjBmENpeqj%2BwZN4mwLTt%2FOlMUXkVyfeAjThbXRvp93q%2FCdEUUH32dJvKCVt5fh521YBrrY25G%2FBtxFX0rtPvI6IvM7DMZeecEdMMxLRC6W6S&X-Amz-Signature=18f348b551d71a5c869106ba04eed4232ea41ddc36c00fe52153327bbce17e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
