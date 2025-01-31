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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPM53M5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDECK9zajKnNg351x%2FxgRTvsBowgR4qGD%2FtvcNdafpqHgIgJn80SN0QXfNnplSWwc5sBvzsngFIR8x8gkoNZQEnzd4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaW%2Fj4TP%2Fj9gd55rSrcA97MtqEKtXdo7MrloHjs54iUvB1Jdv%2BVKf%2FnDbtUlXQlPQH5TQ8lMcne5tZpBW3aECXIgLXt40Lbr7BKob815q95lOn329nFyljkS34cE2%2Bbc%2BXAgknFJHNq8wxMWit49Gjidcjx3UEd%2BQWM384a8Ih34x2cc79Por3pIBdlAZt3Sg42tXVnGUR1d3HvcsmGb%2FHH0Hl6YQWVrEwMYyqbchuCRh%2BiuPZbwBTSsRrKKG1DKMPjUw3sZUek7pos9JfmlgQyNWkCCrS1m5yuuc7Dp9wSu5hx36nn7wCTkCCbCwxFwKKRUDkIFSvSzoN%2BiVKDtE%2FuCMZe3FB3HDopNqXx9Oo82AOp759CXCLe%2BdMIpiKNx3ZmxpgrUTPlwvQBdwxqXKOFqJMap0WOy72BAko6SfFddX8Y55K04PxxX%2BaU2D4FnBvLr8ojyTC3U2G8LwwEZc%2BGVlyjqXgIiJQuQLoB7oToKwxGfGo7ugv1t7%2BoJpaN8FuZZxfAc%2FJ34E79T9bZ2zZpBJxAlfoPAITLxGrPEXXgxUC8ER6FwqElLIz7r%2Bt8jD1ZrbzwEBa1ruX6ik9EBIaNU3sZkIyiwV80J8UI3hDPyXYlHfTdMrLEB46xhHSrXcGLCkJVpQW7C1ApMKrj8bwGOqUB6ou8ZnZaeN2FkA4U2kV8DeJ4cX6kbW0WGU0vqNR3mgvUymFp5F0OZCpjFh83kS65nEas5xo6o6A8YBDuMbIuzDFlqZLNDmecoy2GAvqXyTIINdICW5U6dTFnEBVY9PaxIskOOgektBfYaIGoABX%2FvzxtqXL6GZu7AqGnbMPnV%2BCrpLzXaTyEfpIy94HTHtNp4Be80Vl9OPA4Qt00aNWt9p0NAz8E&X-Amz-Signature=0aff4dd57c752a6ce762fca0edfee6b4cd87a71cd5d87f40746c17fbddb66f59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
