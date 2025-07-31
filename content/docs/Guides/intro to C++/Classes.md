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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBIIIGL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArYFrx1zld6S5Jy1nujF1UsSus3Y9TI33vrGWNVWvrDAiAxCR2mbrE5XRUu1KLM3%2FVawaW1j7gtXJNzjD0mFJrlBiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiONe0ouj9ZtThMiFKtwDYJ%2B91ogEU6DPUjzzVfFsFZcC9CqjpbAIDoWZQiO2xw0P2bCMtJM1FVDzJp8hn%2BIm9DpTDISp8p%2F1npFa0bEyiPgWDSIY9Kg0xhpm6VR%2Byt%2F89C40xrdw19bJeIJTGOTEHj%2FS7vJnIsT2rvmVB1jqCel5XtYru1mikaw4GaVk8c2pBu7FiVZiVzKMSQfvJ8kv77U8aTOhOGM7%2F4gx9LMO33OUtuwaxBiQjTLA%2BprvQDLH%2FU2UjOlQlVddU1R3gGq07e5P0P%2BX4NVvS%2F3Nz%2BjcAGFNjVVDyHTbOpI84pr1zn%2Ftlei682d2mOLy8N7sJ69qr5e8Sz2pwYU%2Fv0RC8V11QO9yujFCRFolx%2Fe5KBOOHHyEipl9Qg3bGVEknkFdixTxopQrBf8ZmCjHrXgoH8xohjqT%2B24TTY6GG6ESR4hcAZmAVZK%2BulAnynlaQwnFPyg04G2T4CfalaXGg6Y33Q9Ptoo4VMNATM0iibvRwVltzgADYcAegrqgRy42X5gmg7whBX3gaQLYcj7OS32ZCQvmJfCRFa8kSg1O4s9z7Bzwjtyv%2B8eO1laGdS0fKPMCjzRMLnV%2FfjoXgimc5s4kK1WUdB0vAIpgLHUgvkQa7Rsrf0w6tS7F1hzmPjYbHDow2biuxAY6pgGEHW7uYcN19BA52AwkmSuuFBLemyFmRi3Xx%2FcOI32LznYSl4j1Ud9UtCcsIZf1AwQh%2FH%2BweJKbrlDIiyyTifHML%2BKGmSPCsHojp5Mb2DPSW5SmZK5oMpwWFOB63%2FCZQhc%2Bnc9UuWWLUW%2B8YFyGNDJl8v8dX5UUnkBjLWcX%2FFJVYmInoiL1qPhe%2BfhTlU4bU%2FT7fWqg4HCcpcsauEP71%2FZwbqa4wogR&X-Amz-Signature=e9d8b695e7198f64eb5e27aee140f181c9bd61d82312312a7b4111c390e0fc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
