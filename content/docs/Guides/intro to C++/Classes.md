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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHUHI4MK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWa6plcuxKCG2igyJIRvmXylyxB49QQxAVNyAks89CQAiBZ5snnnhx0sIxheDVYBxuwrTjEX0Ol2p3KlBB49CrG7CqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD2L7R5xPrTukTMDQKtwDKQDJxdh2bL%2BeyfDZQF5K%2BGmnA9ebfK3jZ1lBJsWRsu38%2FJ%2FXzK1x0r5bskz1%2BSsZanKimt5raxeTcwIphU70q7VVJCfPhm211Nv5C8BzJq84YPFXhH4ZSqmK6kBdGJ9ZMibIislDw6j3YUcNaejs41MBa7Ai3zqgtACFR8tejfwvzpdDwH0bGvZZJfltZtXyVXE%2Biiy6r0%2BvU0owX5sq6BDQmgEuZQ8dbQLQLCeT18p7lorEoeSqoGhQdAk5V9BPq6zfuXzJUif%2B10MVo%2BH4c7NkyokrvL7ZT%2F1%2FvJiXU78Y8VOr6hCL3Lv6JMDoptBUxjL%2F%2ByEi6oFr%2BshwQvOG2m3uH2%2FSVhgSoA0eAAsWLAkgbIhFHz7744RNjdLPQSg3dCB%2Fu6%2FdGDOOjNV58EaVtRQSk%2FTGLHdBGZZ9lxKEPU2IB%2F374eknRJ2g5t2HCihUq8Jw3H%2F%2B2grlSOa1nuHefst%2BEkY9i70U%2FsfwArdmsiK%2F6vN%2FUqOH0rHKnWL5MSiY3jBv40rVIZ%2FuqxyNwkeaoX5OxjmfdIxI6r4br80XPJ4w9%2F10q4nirc1Y7U95JByCYLp%2F9vNPwGWfHgoeXkzmzqzRnQQPt0tHP8KMqz1wB0nAtBD1BKcqlK%2BGSsQw28yGwwY6pgFgtWpJbYQLsZk6%2BFzvuxrc2GkqQtteh2%2B7jjbkd8t0PjVBdkYKh%2Fl6MFMVwhFqOMsc8Jai5e6CBf%2BqZuNZ6cGuVw3jqhjr%2FZthijsd91xql5%2FVFIUAmCP4tkqJ6m86fVdGm7z4Vi4YyehrR7JzwQqS6xkIBWFPPYXFRfIjDJLDhH2b9UjF%2BamGK2iASLI0hZ7G7JFkatTwp%2B%2BBusUMHlbq9CdrG5Pj&X-Amz-Signature=b9aadee04cfa0f45c68b3e814caa7a13bf761eec9cad9a91d298d0b98b2c5eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
