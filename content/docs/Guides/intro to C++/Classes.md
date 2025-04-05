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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XS5K25%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIP0OPP63K3954oVCt2tucuXjO3ktKnn8q2lraPtM8XAiA4fZ%2FHpj9WJt8LeNnbX9MikBrHK4by3mVjN1dIhqUg0ir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTQ7wmt75Rr%2FyajlnKtwDl4apjnfyZ5iqFMdxbWhGYXyEgeUMGLDE6BjNfRHHivmnTcGM3pvZ0xJUf4qaFyPYy7vWhd00zzhilXrUrQOwtd0GiRkIxsO1aDda1kIW6vSLbqhhZYffmCAjokDcq5xEwuECVq0epJYopXlJbaVwPEbqbuScpKZuS%2B%2Bxutm6qV2BDbqJwNxlh1PXUx7F3P44VkR352M80xmnZG4SW9jdUvLgDBsOx9GPlCmT5gmid%2B0WiVxNnMnT5iNbngmBNQJpCQcCYJXqISCjogkXSyx9T5VoqbGB31D%2Be3dgFP8sWC4EeGwgQXdDpleUfLWlZbYybWJSM1piDS7I1GaB92eKKxTNrxbDmfQiAe9RfQjyphOTMqnPteqxalpY%2FR2iuq2dgswXCSruMdOL0UGNGps9QJIBoCe95Uw32qRPjGNt1vjMqNrfSIlYbUy%2BlgjMyuc3FASrW%2BiF9VekioofJFf%2BlEcY3IvOn1tAkw3iYCBpe7MH%2BLrS7zSp78Kj6IJADi9FGjxlKfrQ8N8WTcP02L%2Bf6DudtiPYE5uRD1iKznJyU3hLBBwr5FBVJlnoP6juoazZsgOu5DY3L5AbVJ7piLXyvSzLToIdDIhIwrYIoS6%2FMlXTlZ4fYsaQeH%2FTiBswjO%2FCvwY6pgFop1SQbMVz%2FJVyOWjAd3Haa0%2FS%2F6q%2B1MsVTfLMFyjdUWg402l5epPKs0xPZsa%2FrHdpwcnsDdWn3QQDJ6qITwjLpxQMnDdrfj2J9sKfgwE1WnRTB%2FBIhyphAflTFnhy83bMDzCetp8PcjOQniTmARO%2BJLfYZowNNUZj5yC5Hq4L7%2FFjd2s6GEl01Z0BTYRfE49FteEpZ2rl9NmoiH5eHyj06C5AitfQ&X-Amz-Signature=bd140b508d43d114012472f1d6a4169d2512beb67a29b2abd5681a526fdc4793&X-Amz-SignedHeaders=host&x-id=GetObject)

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
