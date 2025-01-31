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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PX5D7MI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuZK65dZ59jnN5%2BF04oa2bqECL7qgklL4oPUxRSkakPAiAi0%2FK5NVME%2B6Fb8Aw0x8ahBEIooqAMSv8EqA2Eid%2Fh2iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrY0FbToClY8u7G1FKtwDHgShWlQ8%2BsDnXZocjOnkbvTSIlgydGhmSMJTBRD93UEDCG6N8I6v2Kwmt922I3Cnv9xgV5v6XvX3tGCAw99HpKUx7a2USI592i%2BG0r%2FlJ2cVd%2BGdMXzadNpTChvttV6kVkdpCgr%2F5f9M3ifphwPUjpcCF%2FWdT19F%2FZ5TgwnV7gF7sJL25C4pdLXSiGdYlXX6db%2Fi4QqTTzZnB52xBE1xXGXptixzqmTRiSFPJtddBnooFQsjGJyQMzE2RXyxCgrVptyrOm%2FGTEkii1mrDeNC%2FL0fA%2BGBeLL0bIy%2BE1NwdtplzwigIS9HflWVVr9U3r9TxUm2hNtvAaTThurWaxtBRjtZ0rYiIg1pBM4uOO%2BvPCFkORTsEjIrxdxkP3OrH43M5WvdchzcfeeH%2FNcEH280lSiM7buJAlq7eB0ZUtzFkBPRmTpXAvYXIly46OtqtDCv8y%2Fk8qDwxDCns14EmK205yh88rG9B9fTmcMUWasU%2F55bKYsildNXGf7Vr3M45nGuKV3eeSSBr6xsI9oFzynK6Q4awBCyI2hWMcTYmthn35xeecmZadUU97wfBpwokATza5JSON8%2BYx0A4t0X9SykDH3RysIL3yCbg%2BPPoKbxOeEvr%2Bb4Tz0qKIgvrWww9tHwvAY6pgEy8t6c0Ygibk3XhAvny8jwkwckDSh1r3jpTFeOhTyPe0I8KAnTX8%2BdnzJn60odLpYwhfmE5RArhP4cXZ2H1Dkz0VjcXLa8D78WTvmPn7CAgD7P7ALvu8lo%2ButS48sLawEoq58CCJm4NXG%2FO2Szu4emg7McDvXrurGCat04Cae35n67vOxOnDwVO%2FolSAgonODzVTHl%2B%2BRskqmG1Nm5KpD5gqXSLLBb&X-Amz-Signature=166b8aa433f9a719435aa3c0ec49772ea0752b007e76b6960b40f9cddd448a26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
