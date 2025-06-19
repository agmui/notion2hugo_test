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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6B53SN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhVaLLfN7NMQjOhujJ7KT8cOS0qetGz9ctdDc9ktfmcAiEA%2FN%2FpOBIvNqsAwbTMPUNquQwqk8Qn9UjeVfPD4rxhCEgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1b44xPayQOBq8J6CrcA%2BLRVDzJmK2DCjoYvYo%2BJCJUbfuTpxYbI4Da3%2BWI%2BzykfnQjNGtOrI5VmeMsGxPP1wQwqbTWDij09IMnUBnsLC3AgqseS4t4H0s%2FMBBWna4MvDg3tEXMYKmCk4TR1uDEFnP0L4Pnkmn7HUdlqhO9C6e69XSAF7qmI7KEshgCSAr8bt8HKiRpSNlD4Fay6LOYu57rnEi71AA0UlnWbFu36m8U60kRU%2B8JhedO27ZW1i1p9QAQKoFU5SKqdtXuH6KGSqPufO8DrPGokdHatzlqGdw69jp0fvP5J%2FKZPYqaoJeYLdjSJnZ%2FdiRFp8h3ajCBwLm26kICSywIOnNHzsrWlU2YN8sKu%2B4T56F%2FvAcOL8RVuc8uNME9T3K6Fy3ZjMTjItgfBuFknS03NbXPAl6YqQ4thfggVDl3V2JycCj8G6MbtV0dFTdyylea2ZdeYSEY%2BDkO6C%2Bd4aX0jteMjQxQRjfw8AKZDRctnU1JTKBAVjIokx8wGYR6bd4QWB0f7YuGhwvTYarhfX11NxA02y6u2Vf0Fhs8yBYkcjI%2FUrQBVdkhSS%2ByeAnJrwkjoHGMIzoO3j8piq%2FCDzKzm9YIde%2F2Me9QmjKQZLAvKvmNnrW05S8bCuep%2FCoy%2BoFKpaPUMJO20cIGOqUBTAetXAkB8T%2FMhINHyWOz7J7cWF95MwlFmQT1I6PKevrOXrYpXU66lp0hsIaCW0fRPsqPSF61Lul7W3A4PBY6l4LszOjtnQceKwkGNYiPagN9XP2uPL8F9n6L1B0eQ5HBkLgMJMnzSp8LnuEcMDr85cO5nXT700ia5I26XlpglUhnNu8OU5yUB2BjgrM%2FJBaZLc%2FXwHzqq4rn%2F3owsfBl1M8MTjpT&X-Amz-Signature=4497b00aa61e2c5a331676c353f9b1b04ef15bf650de2101ec23c23f3a8e1850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
