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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ75JUG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH7%2FcZMc8tQbmOfMSeUiFNjSIXsfRUqK%2FQ6ZTfeSzoxwAiEAyOv8lMX%2FsA4z0ZpXBdv69J9xhztLEMCOCAiCxfWTIt8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPjGWR%2BE2vz1z2KY%2FyrcA9BOzHbUHTpL0%2BwfGV123ZcOAkLEgnMm%2FbWVSXOxg0rF5vofyq28fjjg9kJPGCl8Vc4Pdgz4RgPr2UmMV2x%2B8nX0Wimz4nfDDGa3yCiUPHwbL25dzosOlJUYj60ZAwi%2FksITImOnSxJHzGJP0RaIvbmE38d9xveAA4as6ppwfCaBNeNZe2hYwWmE0OXEJ3qvj7JheL9i6C6gGQ3QQQNft0G13cLgHxLHfXG5hIZNSGrM%2BPr3uCjml8mGsOyLZ26L3AoJxOjcBG2n%2BFlcfS0%2ByV9XFTl3w4bG2m5dcF7AE4Mf6%2BDYx4WJNFGGvPlINRBfDWNnbZhuC3ZklAhVw2zwCyaHXt11vxJkpVzcFfdYmr0C%2F8NfeFz1O3WFO1RWvaUxFsOQdezxONE4LyNxY%2Fja%2FmLHSuQbzQxqC0k%2FBsDWswkF3n%2BasxrGaU%2BE4nDRo07LLjcDarYjUhSJzNPLAHRWxrZlx54SU2r4l8TwQJaZ5ihHGesVdCynTr%2F02TDcdPDWbXXtfxQwJN3iiAsrIlzib6nKq3bIYDWvirpfCOlClQmNUuauYZoiDYeR2H%2BFYKyV0m%2BhX5XYH2qXRj2gnMgivGOLJiQ84I1%2BI%2BcmpfUpw%2B5MvVbplpiilF98OU3gMOLv970GOqUB31khfTuMwtiNq2SGVOjWw5%2F7c3bol7s5U5yjq5kLIuLeGn%2B9a8lKjPiA1FiyBqxpOczqE2Udze8%2BaqsAB%2B8eKL2aexLUZBpGjY0MYaGc5ikJ45wuGJYEmJunUBJyKPT9y%2BXT6pWohywNRBAAyILmqasPGFsN5BgNrplNDn3HEbal4%2FgoFtcbapaTHt%2B8x3B7O%2FLAfRNigT3%2FJw%2BDFYjQkYxoWggT&X-Amz-Signature=db06040b70870675c37e05f3d5ec5c54e49f63ddacbda761e9dcaf94632e4479&X-Amz-SignedHeaders=host&x-id=GetObject)

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
