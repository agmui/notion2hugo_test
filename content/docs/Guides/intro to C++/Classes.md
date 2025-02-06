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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAHUWHH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCICVdxieUCoXVc1dZpm6xsUAXis8hC7a9Ii4tLS%2FTTIXBAiEAt959vWFu8pXZ%2BOafkMgvO77rEkUWC05ZRPzcW3uxrUUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNpfXf%2FXYBj%2B6skW%2FyrcAxiOlt%2BoL6i8y3KRTURzZAiXSBFVTWt6MrrMKcBwVCUOdKlLPGpW5Mge6B%2FQD3B5mApehbxe%2BEreKq3OFYHebWx1%2FMqR2CBEPBvEFC%2FwD5BMwCsadngFjxxGDpWLmA9oPIXS13V2EQjURc%2FKCKUJ0x6yVSDTQfCRGWcZgwG4sUkcK3iDS1aACYNcZIHFR64yuYegxRkh7u7VOSlMUQZ%2FM8Yg9obtb%2BHu2uaaA%2BHzCs3ONmtBfCF22%2FQEY5YHv02Ix7pJEGxcVX7pHcM49XpJGfavz%2BqD%2FjrA5EQpzBSJQq9s%2FiwhkTzsM7DUpL%2FxkV4WUWxjl8W4mP8SsF960WmIH58P2IA8j8Zz3P2JFp0xvCSAsjHOVkv8MKG8b53j5NHsdnu7HEnehh8UHOJ6DuxU03marAxCdUvopQhaW1zNJwtYBVRn%2BSXR7BC0pkQCLO31lhE95gfVQBSRKigIu5e3bRIR06UiqOK%2Bs49P9Us8OgsFam9CccUkYnndmqAzFYkWL4%2BlBaikiPvEu73QJocxOPRxcDvQI5fM9Qxgsv8tjX9uKrh8wrf6qcgkn14d8kRQhElT2I%2Fr7vbiASpYyy2nZ4VzO%2BMoMs3ccLZRNx3xMw63J8HX3hbGUsJSZdAYMIzukb0GOqUBWTTrd%2BZ3vc1%2B35LOor2rvjZQZAH1WcyUJ6GJHiqB%2Fjw7DJ5PFdDFzDZFn5SwY3%2BMbTjSUgbrsrQVzQm%2BnfyOYZL18urmjgmVgOWFdWbMk8U%2BexVRSxM3xXaIJIk5LTANaSWBzs6Bcp95Z%2FWBWBKaoACQdNFG8aNoh4tdm%2B4rKIJVmndt0IYBLgbk1nNfhOHpaQ6vwWffGd3o7OAL7onXZJ6NIJVv&X-Amz-Signature=e71cea8532153c0bcbfe515984d7191fe55eb345efd0aec33e20114e66292121&X-Amz-SignedHeaders=host&x-id=GetObject)

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
