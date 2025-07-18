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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NY2HZ4X%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T025118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFWZajIRQWxqWJs3kcvw0yoSJ5vq77dg7wutxfUVoiU5AiAz7MMMwX0nhaGUsLjhvxUvC4AIatdoGyHq9Ql2089RByqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHmxOBn7sA6IHBgIKKtwDSF%2BPTVddkWRDY4MtVVDqGgf%2FpiqhFux6X3PlHNXQNSCyP%2FZHFYV%2FnCeu8xCafwPFphVipftwPziY3N9d%2BoLX9WiKlaCoFhCnJuTfEl41GVRo4R48A8R%2BxRYzhQsko4trRtIqBJRBEL%2FhLu2G6aFIFIskbYzfBVZAF4f5crk%2Bar6%2B51lUfwyfz%2FQUYNLBm1ABmSeL8Y%2FpZ4QxGH9r7fV0dYbgE3SMDSLGhP2Ic1KwdZ0KkMeF4DLwO%2B9C0ck9IRVToa%2BXYi%2B0i6qv07YKvExufWxSIkJ0PAxUECgtZRGnQZGmO48lVWj%2FOGi2FJNCtNhsxRo%2BQqmmfXiF6O2o%2BiMx%2FZRC5H1k4AetGOH%2BX6x0TmUjqpzOWPfeEAG%2BDCTGkB6iDl%2B1Ew8WSyLVvmWtHABm0nsDeMekmIZUySisccg1IjcA60HCoRZg%2BcCblx5wLZ7qUuRu9DOZkFjxU87m1sd5RarcG4m0mQ%2FTDcYZdU7EgGOlvqElq4PH%2FRgjdUH3iGTprld2ldTDKWl5uS3ZfNwp3kJf4MiMTvxyiesvJbvqVOqIg1aNrxmmBhc1QsOkmhJUSXIsCFGXagz4%2FD6VoyqzjD5BNQb%2BLh9Pe2U9afDaZQOwu60pWnDEXidjxXww49%2FmwwY6pgFdSiqha3OImgQMbrhqvpXHtCwavLVHg6V7GUoC60wm2fdFaBP7bUkfhv%2BAcXGCW%2Ft9cd9K0pmjopHcYYGEWHu4q2UbdDIi9KS1p3TzSZ9uQFf0bh7mlgxwaoSoyHXyzds5MkwO3FVJs9KP%2BttcQDHiLllgMKMyTHwAxn5zVLJw1myqSeIQKLtT3zfEk0%2FB0WZv7SkqnjhuR7zzBFTXZcsEivvwWm8z&X-Amz-Signature=63b37a54c0f3324c31444b5f7f456ad81cfa7a56205fb1b360f20d6da6903afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
