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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZAX5DO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDY1j2lUmNXOYOa2cuhulUoYNgeMy4EYjqC5xXfs%2F37gQIhAIQvRhnWpinXffF%2Fd4sOHFOnfU6vcD9zFMdqg5dukxwFKv8DCHYQABoMNjM3NDIzMTgzODA1IgzcwIFYw96DrLryX%2FAq3AMqxgv3O8c3Nbjv0ek7QFPfia5ybJE9Wyd0OHUZ7%2FxNLR33e65iiSbyCFha4hlv8%2FaHhBC6yWRm1jR%2FIwY280z5LmvfKpi27fAgLAMG1RSz0yDzRnRCRVg3y5Hb5eieL3POqCm6s38K09weko%2Bezu5Ebdcqk4kXxpXZbrcrwlBB7WXNK2jjn7nh0nr6BL5s7e0BDJuz8i7YzSYBydukdoF6ywyW8%2Fv2QgRcDr4qK9u14ibNshJwGQ%2BJUR9I8LjTBFv%2Bzeh3oRZp8te0tDJI6BQQmeQnBtwwiwEcVLDMXE3WJ%2B9%2BjSIObGLoAiP%2FVC8sRozg66o6bTwc5UGEVApuc7aTyFYEkftBXZoRlxrGAdFqj5wu7Cb4TO9WiZ9IgEeQiWOnqF7n8jRkHzTacRxHVXESmUuDv%2FpfyMeamrgaFtT5wkm9CQHOv05Tig%2FI2DVF2RaKuM7iq9qMMiL%2FiPqqswPQVgNTh3Vrvpcws99QCKFdikvm7so5BZnWUfZO8p1kpNzy%2Fweqq0hEs%2Bd2iCtBM4BUTwxOsk9AUEtNsfZXCjfRtH6bQfFlprdGHYKd4cey1rfV%2Fn7QeRrMrt2xsz8Ki0Dh4hXk%2Fr4KgXuzr%2BMwM36v0qV59Ztllt6niy86ojCA4uPDBjqkAckSol9e3LTefBD%2BlwYUUW5DBHDp%2BH%2BGXQir8DrnQnsCwMInLLBAe0UjZyeAt05dxg0bB72yq7P6gIRRpchmn%2BemvLBF%2FFRJzOKloLCCQ92FVxX9zCGk%2BbQIg2rQ00OHXojyf8FvyYVaQGrN1iokF%2B0eq1crOFN4MtI4FTOLAxWxWREmJVOOCSWuGOVG6qgcwy484v5zB1zMei%2BqoOz2%2FutZOCui&X-Amz-Signature=505ecbd789104b98c5a3bc1b3785a8aa86192c19a5761961a60ddc1e0dfc43a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
