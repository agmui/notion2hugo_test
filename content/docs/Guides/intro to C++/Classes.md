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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDMSS5JP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBI%2FyczUJVBgfHd%2FPVTlckIU36T2o2emqmra5o8U8lCWAiBIPJQDzpBCWKjp3kecj5bB3S1FhUqB%2BYAXs2wQnBllgSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fbv23VY9cqLtyoJoKtwDwsjkFtM4hMV52yZeJl3DOnA7fPKdf4doKte7HD%2FUumzI79AMdzww%2BCHp%2FxQkylq%2Bom5SuLK4ZWIEW9x56jGoSUA2y0V7PG9oac655Ga3I7MZp2efI%2FgPehkYtz3E4lr5MJ8tBjHrdZxBOyuPE1LYBz0LKmFf8u%2BIqq3sC%2Fuz6oeiUO8%2Bg%2Bh4GtSLQlzhml9VXJfEFu9V8svl8qOitR7qZqrh45z6sUcfHk5NfSlpnb1lDh79cvGKh4qMRWb8uOK5HjVJzxQcpvE%2BIOGkO%2F7rtb4TPoZ1kivLLbVhoCVFTkBRH3S7IDqOt6t130Xn7MVnOYuWbfwB5nP1HBMlCjzCvpHv%2BmQAczC3Jm6OSIUaYwzR17UjUh8Jg69S%2FdB1kcnzN6P8EDp9A8VzNzSnh1DihY0ggO%2Bd2uhPuxETe72j3SE3I5B9255PPrzyroWp1xzN3dsKsEGu1DiNxD8KqaKf2Wkkg6RyQvRl6P9CqQIYus709NDT5Z7PG9pdXhVqmpYal2799Ys9meER77ve2QIzSg0ZARb%2Fo4YibiHCMOnklwxAwAtX8MlGeAzqW3s%2FB6a%2FroiNpqlrATrMMKOssPcLgF4OTTKZ7IIGqQ3kFTvp5VvO0vISxY4Mak647kMwg86OwwY6pgFfqu62PCA31VjBmlgV9N4tamk7kvnxcvI2u4xqkBHrOdVxyrEtXhIu%2BpGUN6mMi6l%2FQXDTKuzttg3gkoLflPKJ1KLw69uQMWvo%2Bnmyd3cWzy74nsVIos%2FrngFY5igNz5%2FNqYFsec7y4jL0FKOH3mXELRAg7wQOonIZY%2BPL9jDNsrOoTBgn09CD4WEi0%2F9uQdfkviru8r%2FUUasm4m0yFYXvaDtlDKWm&X-Amz-Signature=cf306feff3f9b3705e6bf7286828b1a96ae8da7d1d2485525fb0556fca50fbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
