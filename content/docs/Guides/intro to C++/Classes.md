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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CBRPFR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDooMYJc8BgQoHh%2Bs%2FSHpfDttXk4lNjAxVOKDO77a8P9AiEAitCykZ49dFkiG9sIJZ1SP2mp2UAbpHv3D4iajKljMbIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM22BYi8tQ%2F1FfRHircA%2BtFz798mPHVHElYmXwCg9EOF4w6ChcmZeiDqSU34RPpKjYn%2FtWdP%2FFh9vXZaqhyailQuuvBZEwTyZ0H3dzewaIjqrMio5bYg0ffzIhX7gWU4JzzE9xzNb%2BacGF8TGA4djAf43udLKtrEmCCaONVDyD3IA5A4rUTDZ4YLHCM0Sxwrw8dqMS6kuPRcnAXhWJxJoeR9ioEmyAkqlZAoRoWn%2FNn4OPaESwakczv3yql8PucvslpTclyU8XoCnhUv78p2NJ%2Bq7OK%2Ff1FntaeHKXnPK%2FUelTjZT3kZJyxAF%2Fq0pkPThpDVnPa1H8FZGoemo5XADGzmmtaYv6joPM%2BnNFPvuRk1AtOCn9ieD%2FuzgmFQnzLqTc6hTX1hsUnrC%2FQlm6Q0sVo8MrCyRLGNFBFWXlzcGD0yHGPaBx%2F1ifm7YWRdTRmZfjQtspc5HrZYwytgiO3Oe2MO%2FJQKzao%2FZ%2FrnbTNnHp8iMRVLuTL4PmffSQPZ5%2BD1tufMQhpJqLpsOgx7sxcj%2BfghwkENQkAAi1nVNxvdVHRLpBRZ8e9rl3IZeNXJ%2FJTF0Lg40HtVXCjZ4jmWywjlsaWrlsY4Hh91IHUog2X2ECKV4spPS3skRODrUseHldbyc6ugyU8rA9TDngvML3wp8QGOqUBtFve4DcnYyyoOrQej7BfojNKT79HC41DvugiPbTvJO%2BMbDCcaH3i4tsApU3EVwaBvquaBo%2FjlkTcGDwnLWEXMadqyWn8Xhh6%2FW8SaDVhPdXOfL1PWstW%2BE25LCfliKy2WOsJLGJyrTQQ5hmUIPq2CLucmm6AjPRwtRUl8ibgW2ES6%2Bysenu7p6%2FFjAdm%2BOaPqLZ7aHhGiKO8sU3zbwAe3hyG5Al6&X-Amz-Signature=3df400c5be7b3994867c9c153a846f0e01f651b0d8567ab37de5d512b029ae9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
