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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCX743VW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoI2QsqYDB85EZd9cChHMPfTu1BSKrqOUV9DlwL1VpSQIhAOa8AIOUbGjvmpfZqY7iLEMQo6d36KaQPejr7XmqEhhaKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH7v98wKbHRrxBRWIq3AMP0jlMss%2BgJxQkrxLNvDH%2Bz0tn6isq%2FCsSaPlhDoOJm45IeHEgWUGl0ri5EuTl4Zabk9TgO%2F%2FdLaurRMz1xWG%2BXglM%2B8%2BtigFvGHbLoqTp8a%2FeiL1rxaZDjhcz6rKd0O0%2BGmMv6%2BQcZuo6o8kbGc385mDH0Gtrp9CHYDZATiJrZS92MlrY54R1S3fcgE2nOcyMHEGUw%2FVBlbg3oCPyNNTd91xM8NS%2Fo0nAuN%2FRytMppD1bpud922KgqEaqwsvC%2BG0V1i0HaUUUh1GLTyWkdhNXzw5uTYlGs0bB%2Bw%2FyMN6zRJutFLXwbdOlE05tisSdLZFBuIJ16D0h49TlXietH73Z%2Baw4FDGAmmuPizEgj4Z9MuMP9hoBn2SuIQYtUmpFwAYWqlI1hNvimlZ%2F0q2V7PfjLu9pwSc9VRCSlyXZ7UPYV7itNdf%2FTEzNIOKQIkn%2BzMwiKy3fSeZYXnU3T2BQk4oIdVxkCudMUL74jHs%2F4pufZhC7nyO%2FCsahn7whq74cq9bNB8RXxewVKxqCi%2BBoyajCmubtYoP%2BhJkcKWKyFScBeyrSH828m54BHBmkedjMTzejsYMywZoDc7%2BX2NSk0ByUeyT9dYQTCwbm2q3qpN7yRhxc5N22LZxa1wgGrjCq%2FZW%2BBjqkAZFxIUI29NsJizlTovalJAkLUHdKaik9enVFheBMZKg2Eg9JGUDAd3nLbDRMTTLR13UMDJx4wOyAsBhYYBXdsDGeYnDFd6Yvf%2FpassfYZvxSAjCnJ77L4drZOUjHG9bREu%2Bmh1yPHiJ3zLtlO4mYyZ2WDS4P9%2BwxxK1DmKQJ5FkbhdWMIjeHZMWjWMxBLfzKSjM%2BmPHEqTnV1807Yrl7CCUm0Qei&X-Amz-Signature=e56a47b7a51576f5af106273671a4c5496c757194d2b786ada49a6ee97a47c81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
