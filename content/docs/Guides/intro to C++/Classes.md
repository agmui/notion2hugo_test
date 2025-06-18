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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KCMGFE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVBi9rLG1dOZiGuofx3Aw6ECkz5l10aZo4gc%2F0ka3vUQIhAIBFK%2FmBAxxcBSox3RAnqynWAFCAwU8pFZx7V08eym3eKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtVr%2BdgBRFj8n37nMq3ANrs8Mc1LtH5e6mdz3p0Fixr6oYHDpOEnI1b9blubzNM6ySyGgN7Da2PJ%2FX%2F1r1uHALvVvtYczQWT1Ukx5af6MDRnDl4QmDBfTUpqlOsjhaRNEPS5hSaKjrKmoHRXK4gzYSOh314Bz0Wb%2Fi77H0Z8FWGhY5SpeJLnqKDUZ6u6sMDVhrd%2FvdZK1J1K4jnnYaXtZmNQGAL%2FujstV%2FaP5khXIlEp2JzPqLuRgEQ6Q0nZ12MuGNrjVyNg7w4n9qAMPBoGo2wPcEa1BO9ewW4i%2Bw3m46dlUbNZvLDzaQ2d%2BLIChwv5nCZoyiiwrwpqZWDp5rQA4a202Ll%2FMMsMxv0leWPlRZwZ0%2FSJzXeWhp5j5vVFgauXK8P2voN2VULYmcApUWl%2BXqLLD3ZwS0Ky5Q0YEi4V8Xqr0Jq8a%2FbXro3GsX9fM3EsA1FrgMuVSJxp3RES3eT88lQs03F4FOS2OyG1w8p9UyHrfDfE0lQmlYHf1S71wk0wWSJRNjxmJ65e0DAku1%2FE1bqc2Z45VeEba4LvCiMDi0hfMJt%2Fzw5X4VQ%2Fw2v32R0hbCd3jBTHZN4OD0RAWz%2FlluPA%2F9AEz4fdwJkrWdjS%2FMoX58pMoqGzME44NNt75ezuiNuPoLCegI0JOS0zCI9MrCBjqkAQO%2Bo7fNfZUWsy5psK7Dd1Z%2Fk79Hvaw8FXbTcQwA7MafwCLvneOro8aPB3QsSIe%2BlwAJFp7SjvuEbnF1%2BDeCK271Zg93qO552vQ0mFzcUCWg7HbsmQbyb3jCyZhRF5M8UbB%2B24BtPQt4%2B1snYTIqyUQj7cVlMEszo%2BsPjBsJe%2FvxOx7WPOGMZgD5cuJQDq3ik5%2BkfOfgcKieb77BksxmJ0uWHake&X-Amz-Signature=be015f73c1a75439e7c3aa9e1ab61b5bc273c7d21c851bcbe2021ed81f078182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
