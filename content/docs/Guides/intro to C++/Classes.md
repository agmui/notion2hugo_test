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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFFC2KO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2BCYx%2BurBwnhuhzLYxLGsB9q6Z5puWq%2BOg0cXoCi%2FfgIgVfPJUvP1LN8Rzdqn848S9qxNqzuitw2%2BKqocPBuaMpgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBFY6sXG1pzuEP5yircA%2Bv02qhfch8V%2BNdl2hR498oDYatqljXQLStLQvpOJImXnmdwAnr7y8c%2B0G1Hp3KZVjWgP4mGUr%2B%2BOUaGzv6z60%2B5hYnlpLdu%2FjGiUB6jph35MkvmV9RW00ZWncT8hPbNhqR25HXhFMolyec83k6eu4tZAYpUQKhGdiXnHBcVMcmKWkYb5SMW6PN32ezMAL3%2Bxd5vYcq4X2Sj7g0wV7K01r9Xw94EhNSEiOSgX3W3f2YODFj7nTYtbA0OBduwmkksWn%2F70wdTVGq%2BjpFwHPfjH8Kx7kXyr2AsVutI5%2FJ5sojqlnrgdn9XJIwkzgscXoErc8md1fFfTv0Zcb4YC8ne%2FB13iHi%2Fjn8njSOHuJL0iclHaAKxxglRAxhG56sKGN12qA3L%2BT%2FLy2cBxJTmUbnplocMDAW6MBfr4qG%2FuOJs%2Bi7%2FaC%2BGkSUaqfhPrvF5DT4wNxxxvOjlosCDECGIC59qs4jF%2B1sPnLV6D8RuGfP7pr9QA5ArKSyGFjwKr%2FUwT0a%2F4r3glNtNnny8xjb6uzepS10NO5TwKBEdyCz%2FgzpIpyugUgsQikDP7BWvRUF%2FmmZR%2FgTexeU2rxY%2FLLTCw26HyPXzuENia5rYetwDw3jAbEU%2FhxUNmQluJXtb2RPoMNX%2BvMMGOqUB86bcO6sKlSSlzU6fmXf80%2F7S%2FAyNtdyEcEl1qwkgvVunKIszdJbX4DwzKd6un4fK6H6lLARXoW1U67eYWctpqfukM7iMrbPjuWPM1Tmi2F%2Fp7vY8ZrGVGxyDbOtegnojBOZWN%2BoRSQjWXFXpBfX0AcAMmoOz6MQZF4k9giQvASGOqD02DdX8jqfPPyXctLj3K2voTumGbVA8NG%2FFyCYD2roZ8Q8n&X-Amz-Signature=05734b65baf52fc0acee3405880d509eb702c09e383fa154a48ae8a9650a1f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
