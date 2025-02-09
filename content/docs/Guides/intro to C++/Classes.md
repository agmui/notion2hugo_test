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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VP3AFHX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0DqbDCqYNXTOfbTCC%2BgNuMjVDy3PsJoyALBLem3G3EwIgCapouhW6%2BeVlHo6Fbw8u%2Fl2jRC1YTFEwX%2B6cLILTrQUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BSgvCEeMmiCAE0XSrcA%2BW%2FYCaVphRoSIMUdsfOoma6jWxoJCgKcsYO92NiuEN2eMhMx%2F4sVIK3TCbjk35oFfC8YErkfUz1zw9kx4mlRtHVU8CjfkglnfnyP%2BLU4gUK5OWS88MdL1ATxS1TIYF3FhLmjDGx98TqB8fc1VAqnxPaOVpIuJiX9swnrVr%2FFleiKNbWghr71yAaoEf0tT0r6gRrKLWqE3oh3SiSQVVWk4uU72RQMP6ko61eLt4DLq7vVNAN6FxYvX5RfFZ%2FRaqdjHH4DwYGNauZcSbr7xbGXys7xwO5PUsImfytf51mdxi%2B2Tksp9jpmROBIPO8fiOWEeZ84nRewCIjjJGEjJ2vAZjfnf%2BeKB%2FzjPhAtF0a7uhbz921icmkrwsGEI%2F9odMPTMku8Df%2FgtMtagWr4tyhPJRXmUTDMVuAVETTegDLjF7KgESxrIVaSgCovGc%2F8FpdZRiU0cY80bYXREx1OiObeiKYCG1wdwoF5l%2FFVEb6dF8nc8i2%2FTbr8%2FyR%2B1nzgknBvGuaE2kEN1cqIKB7YGSILbwRan%2BjfQYfXAsn6bTzpDgUX2EMlGBR2YZhU%2Fz6PRlG61cH%2FUsPNU5UAK%2FazE8Y9jQYufhKdIx05d%2BBCmrut8wbBGivdL5IkXEN5szCMMPjob0GOqUBM%2BMnZ5%2Bgr%2FWI6XSj4yBLR9wewMalsKNosE%2FFGP%2BxDkC6Vz5iAJjEJPPBO1%2FUPQrg8WSv2NpJEfX%2BNeey88DdsIigHNqZKZKNvngZ6yfUb%2F04lgOqw1%2BG%2B7%2BCXxGcDe0LrqCp2NdP1gFMr7F4RION5VJ3JBQNjn%2BigelsOdQHxVkxhm88XtaE1G%2ByuEyRLazKVWfkA%2Fa2lQNfUMnh%2BE7sK2SI2IUr&X-Amz-Signature=6ab779b32ddfc1b1c8c07f030d568121999134beebd89d30fb499568a69b4d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
