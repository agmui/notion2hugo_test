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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPYNXANV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFoNQRWMQRw1%2B4IDsaj41bpBvkNMVfpzhl%2BDabOe%2FBTEAiB7ALRnXPdilcf8PDMNvrDkarN4urT7ZNKjN6sGigT9ciqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV%2BjG73c2VG%2FcuSQdKtwDB9x4OP6MbJUa5lZnLf9OS%2FBHLxfpxRy2NG4VjFuD2vvRZyEry%2BVk5zHz6HXGhrAoCgS1IN7jbqhHTud4g9hFs26iZXRaaofr%2Fp%2BQrLGRYG3c5s7IqdNoIg5YTLO4Swl6SQSNKGjJuqmG2tmSTum3ZR8vdVmMjE%2FcOaLZL2IhFBEJ2SvuKqW7w%2BjthBMIvoXkg9gbaPAjxld60jp53oC9%2FzIPj1iBYkFuf2cVm0sbcWZF4fVrn858WoSVUNYqY9ajTkQQEoe8kiQ7c99xBNIDjfb7u%2B53f3b9tA05bWk1mINunkqcV02SUhTwY3Cz6icQSYDFgUt0EaejanJby9N%2BdgHy2l%2B4NI%2BTzThfj%2FJG4erP3%2F6bvLISYv%2FZ%2BbT%2F6aVpFMwrY6wa6vHNudwBXO3XNj9qAq%2FQmfz6WDOxqDRLnjlaj1qeG2dUdm52t3hSQAAQifLMIlWkGw1Koosjl3GQklP%2FNCWWwI73uJjXAE3cj09aemEX7APycESnmWF3I589Q8CxQ4BGdsjG5uffpkeUHFlkm6TilL3AkVxf8u2Nw6rKXtRKpows9Yk64njmzVveBG7Sgi1Jcx4zVmV8oVQ4VprUJ5VCYaK9rO80%2BQ1x5q4lM%2FNPmohRYSIuRQMw7LXFvgY6pgGG8jlfYYoPRAQFZVOGmHtNoyxZcN0jdlhAYEruqp5WdsHGKhTNV82rtvMk3plLY4vsMmOWMjRb2r98HV2nqxraAfACvaLL2fR9EMj8VlfdNFljYgtnIJOYNZu2TmrCni2DZZFICGPUOpxT0dT2pYE7o%2FL8qB03zbX5SdnbAVn1uS4rLnIZmMWOOA4kM2Czyns1Js588RRjV9kphyQtd8UqvzQ6uObo&X-Amz-Signature=a4db3748e3903305db951ecd44f70a038cc2e085ba50e8edaa883a40d83f5935&X-Amz-SignedHeaders=host&x-id=GetObject)

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
