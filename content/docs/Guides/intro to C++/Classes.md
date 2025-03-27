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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLKRGED%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhVSUSgpPtOtI97FPNiyMUb%2BVuEif5sFVYxdaM08sBJQIgZVy6LNYh%2BKwEtFcT8li9sjIBPxKq%2BP4V7KOiSnsnwwIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMZ1xvCmAS7xrXrNcSrcA2ViXPbKZg%2BimyURSklNqymC0lskhY7AI66mHDt87N%2BlKmxdTK1WlVhq%2BiczUA7NcpZEl5s%2B05YBImSX9pK70qsZtNJMku3PRKYqAOtLZYr9yzP7KuNPLxl75b0daSqYOTrm1qZr1saP1e4gqkcsaRmUgEbYS4VQd6ebaHxdmlsxWHdys4GHXCZ6m%2BKcAGPEzBPLM5uXpKH5x9vkC3M9VKevwfLtvKNgNMsPKwFwuKLAIMmupWLt4OtFJvE52r2bvWcum4vS5SvFgPD8Z0EFUwKdXUVJvRIErcHE50E3EIqBkxgXpsY37mH2cV222EFSq4r6MEz59Oz%2ByR1tAO%2FGVDGkf4LN7QePYuF7fbfNrR8WxtVg5hrNPMTsKowegByNKBlXvrCS%2FGK1I9flwoR3h8bLtH8HQaU2%2BeByh%2Ff66m6764nsqVIQmW4SP9lQuKL1%2F2UiltsbzXsKlH0y6ykyOGjUOQvC%2BoJM326JCm1aF990V0FBm67EfbtTFhkVJa846Vpyn3ZlIONl32%2FeL3H4pZknzRAz%2FB%2FCGlJaoaFqvAvnO79pbZKFqw8JdeK4VTAUiPtrf727hOqtlHPP1NL2xL1jM9meyNNLc%2FCxIiKrqMxvt9VEPXPgqPfoybieMOO%2BlL8GOqUB0%2BKnWgPBjwBfP3rTRHFYVkfDQmJkPTMq6KMm8%2Br5eE8vjmP1sw3mQ5hi26VE3i7KHD7uQp5x8SnePTW4t2sil1zNfPPxClKoo569AA38YuVb9%2Fi3iCW0du5WPi4XvYYrOTW%2BEZr4qJQXeIq%2B8AJLZNujruuiF%2F%2FwZV%2FikJvjHcKZhJ%2F0T8fPCiuPlJ%2BAoMSxC2M0xE74wuPGoIpTSZX%2Bxi8Y6Z2M&X-Amz-Signature=7cfb78de57863222251901f2ebeca2fffe66e03c244a4e7ee1018ee2ac6a9b50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
