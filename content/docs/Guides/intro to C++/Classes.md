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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNAO4AHW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjn%2FzS6s0lhS5G9rGg%2FJENanmqIg9cnD5AVJJNQj2ALgIhAKoWfkAbcXKdoxchO7Zos17%2ByaFDdvdvFqeSbepw4qPFKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2FZSQ4vgluZmS4iQq3AOzfOP2gJwDZ41lThwjFIKMsCIiCMBeNQ4LFAGwglb5YY99reiHsDJr1kA%2FGa7apMaPHr0zAvq14qm%2B%2B8foir%2B1w%2BTDB7knAiSdzdAjsd6ynWHI7A8mVuzHNN3WHc9O9%2FIBbKx6%2FYN0z4HLSNHnpnGx6CHT0m7k0qNPXww%2Bps6fCVg2i5MEaSDVoKv2UY8aiGrLq73TLheoHCNB3cW52jRUI%2BqCUkLAPw%2F9w3Vut%2B5pXVF7NC3kPH9JzZ%2Fb89qnzjVnZhDtDZhRSgwVOy8bV134XD1zNNbBn51EtPZbbFCrjAqZSl9L3vI0gv%2BIl0GqM2wK%2BC5%2FskOLdoGCBRLDcJ2K%2FyDfjx5W608mAhD1nce5C1fJH008B3xEjLK5N4Z9k9g20fEg73naI%2FsuCnqiGlQMfncs4P2ohp5uIVH%2BNCRvAIglchj7wiZbqUQsDNg8Dz0rmp3bMRg5YUhqbrZIlhfeM%2FbSHn3ubC9Y28EtFIb7BDXV1NG9CpuClhhjOGQSmuTQJvIRTbp4YdDMrgV0vQfcTQa16qhZxAA%2BHSC95xkvScjfrNY8olEHCr%2FIzclq%2Bs0wm8snUuEeOqcLbKhTiuWtKgOhWIJA4Zv%2B%2FwmeFyDxK1UBQ5oFtdSOtf4zTDCiiN%2FBBjqkAbLMULmV8SKS%2FYvhB%2FrGCEG8YKKSvU%2BjVNmrhfeM0%2Fy2kc6a7HxFSIQH3hTHIVB0cVjAcZaWY5C4fn4e2j%2FKleXEFLMjgNXlDl%2BsgrlYxhUFzEw7iJrORf6OvqKUwRjUXhMP4of8ZsVWuUBBY2mcDbwSDEfBubhztpzWLgE5%2FS5i8MTLASWp%2FnkOb0felzcEJQ2oH73fv6MnxCvQ2E%2FpBMPlGGiE&X-Amz-Signature=85de248ac11bc77884462728d2e5812e5346eac3795b6b4b5e899765c5acc098&X-Amz-SignedHeaders=host&x-id=GetObject)

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
