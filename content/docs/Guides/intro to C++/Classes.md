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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV2GVBC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCID%2F1V74xAp%2F6i6Espf%2B4XYf2mwQeDqUy0oREf7cSURHYAiAo7Un1D6zJiJvcAfY8KN7pdepK%2FwgvPej8CWhDGrKGgCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMGRYlQRRqmeMdq6LHKtwDe6pjU9ESKEcV4UpCrXM%2FFQ39hACk6fgTQr9KCBbZzAvQRbdYDwTMx9IRHtfE5xbiToiyH75%2BNED1wRIQz8zR7nGDD6T1xObPHa4OH8FlF5qMOHmfevk7%2FJJllYeFItXqaE800QkihCiG%2BvOQYGlYFsLLOsk7XvEBO9rv7AgOXU2b6H8XYVin1%2F%2F6a0nCUULH9oaDTKyd18nXhLHfuOotucecGhwXf4AVsTSLb1bgjuzy%2FvdmnNeAG8xzDpHbKDFskzwDT%2B%2B%2BX1es1HMQmJMZaWH2Pk%2BNjBwt6GhJswAamPHhRJN1%2BMVtUd57WnBZG7N0ZcSGiFsv7e8x5%2FVFz2Fswe%2BjjjsdIVB2XfQ1GGWvSkESgCLrREQy1pv%2BBTnZAw%2BXv3Z%2FJluBwoqW6XI9Bsz6%2B3r3AfOgzzvQNBvUxl0HEBIecBCAZGpmOW0vTPH5MK%2BpP7Sh5o30N7porO%2BQXEYhC1zv03nwTApW4g45rY%2BzveKaSuJolXlktv%2BBKwaUnp0fCcvGXrhwaLQUFKyscpm6wuahzMuaxAC9LWCIFz8ktXw9m%2FVgY6%2FBvqtSSP4bxCgT0sx%2FZjIVWpmNxMLtFPuFigLfMocV0IiKB5CicT%2F%2FxuN6l%2BmQoRHI6iGVKeowu8mDwgY6pgG7HFdW7N%2Fq99j1hdDSq%2B7phc%2BcYOQ8NR9CVwT99%2FzYJ4UvnEqERJz2AhIvT1dU63Prq47LAtRMXUhqf3jExIpS9DHhGwkuCcQ9m9I%2FZXUNu14172KCICII3Uy45OqSRGT6gxr4Ocwk9MENnIQBPMwQzzepAyAXgoKcOfKzo0aasLy6VMTHrFtcJ3I6w2KQrCj%2B2t3FlZpakMFbLInErY64z22AaGZz&X-Amz-Signature=982fdf3e3bd09f8b223f665fe0143a816de164b4efe7c1b9416b4eb58666cd29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
