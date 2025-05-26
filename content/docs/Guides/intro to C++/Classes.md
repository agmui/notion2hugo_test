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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQHNGN6H%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEuezbhvsNAzdQtPJa1QpCYlizw9UsKgmni3CXFR4HvTAiAWxnp5OsEoM9KN0hwkFwwDMkK3xZ5D6baIqjnfu%2FuzNSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMBBmwpDHGs5z5tW1vKtwDuPx2AoxQR0GXNxwb8JNtcOCSOHhYBQ6NO6ucQfYfE0iO2KA3TIuSHezc80sJM%2BEqdsgchqh3I%2FNFmo93%2BnEVdmSlPHWbfa8LmSWnfFSI1duXt%2Ba6fRx1cxyIbLzptsl88KZfUZ81pxwUxc5NUcJXilZJO4WNE3SDpViWjMeR1UCscnL%2BBMLiSirUSEZ3V6cdEmNVB1zziaw3TdjXhxRD96E%2FiwUqIsc9Kw5fWI5tOBcMF65mFlRT2ZzhkH7InPRTa2XGTqpBa%2FnMSbQFmmVFT1OZm8qY2vmY%2FNSvOOgLZmCiKzQY9by591TxQigrGZ7stQAxGsTjXjrPHbM0W3t9uGNNR64X%2F3ZpM8mLm4Kz%2Fu8W3YoaTKmDT92ASKYOqkblIeAuJnVxDsM89H4WjXBKKAkZkNdlXme%2FmNSdcBzG1XrHgA3DnbpyLCiVc%2Ba%2FmsZou4u%2BeyVjpH9%2Fe0YNdqXvXfW73UAv%2Bwin3addzdyFE4D1rbk7v1VbW88TbJvXyi3oODaa14ya0A9nIoC4zE3Z6ZjDmbnkv4nqdgfiMrhx%2FHHv2myhBKLiqSO3QYe2Fr1wFufilKNq7kmjswBo5jAAxigdGURB6VF8y8P%2Bc0eOfIhhGppJX9nEi4w3mk4wydfQwQY6pgGulZQ8mZ8JMBoArt2nwZzKafEXdMwFxiqymbrC87dCmoNvykyit79QRS6zV%2FGiR1NNuiWxzBQiZgNzeKvBNIIROfKwaaVoTDDF%2FQwKOYKki6McO%2FeO%2Bl6%2BjRzvYCADc0hKimEGMdGszJF2Y4%2F18G6fJ92ybjO%2BnXezNLvocUvPyo28yuv2ofkYfBwwADloEI%2F9FZcJ%2BiIJ5Xe3tOEmAnkC7FGIZl6Q&X-Amz-Signature=d44023de0227f1a36d30cce2814bb2865727ae0cc6e01c810bd360a09df62e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
