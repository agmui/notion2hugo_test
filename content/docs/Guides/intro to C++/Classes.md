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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOR5NNKG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9I9YIP9fRVJlcVjvzvcILwLCQ3nsy2RxRZgoIAA%2BhnQIhAOfe479uDv2DMDfYm0aFeTawPfbGEVJL5b8ufmrQ5cJSKv8DCFEQABoMNjM3NDIzMTgzODA1IgwPOg1erts%2FS3OZ0X4q3ANZ7FNGMmXy5yh1neaiS58yO8fsx%2FoXnMnPoKmmjNG9ROPBDbAMQK5lpKnJk3eu%2BwYhg78Nc4phjaCzVk0nJViT%2B9QYUToU2eGEgDRaVyag7epJ6cxSD1WEMK3uEEMsmzar4QhO%2B5Mjqu0BWt6wjH4Jg8SOVWllGUnUQbavDYVmsh3eLThhSU11EYAvpcjFyskgPK%2B2fXzf9uZ%2BLRh6uNY4DESQq5Kvwjd2EywjDxZXNBiWEqsJ1DfBYYdWAzQOQnvxY6VX%2BpMbqf9SiuAwRrzmzDOMqCj5vWbzfS579k0hRDb%2FgmudJKnspXNJrPkDEsOfuaO5V4HEPqi3msMJyN5kmG%2BO%2FUSMiFRt9mYcvYPcA3Hc3LfV5e%2B99p7ygUFmL7jUx9w%2FK7wuxWGv4qA4Wtaa5SvP7R3lCaHDIuBEGyZZDmH1chv0TSQEKco%2B9ForHrsHANuZ77I%2BmLRirmG3QB5bxBddontNIFs1%2B9t12XdLJ208Q3qnvOhVLvql02sbnl4F%2BhXs9toUATjVNWdksw%2FpPlTyeKzP5OQr4IR2yspBzAlQW7MnWZD28fbP%2Fws16dTqQ1WHTXHtbM4XeiYphDjmYcXmvXTUct7LhgPFI%2BLfYNt34IE2IrSB6eO5ATD3kYHABjqkAWalkfsSXnIRzc%2B4w1JYa1GXHVdlXkcIYyUOvEkZeK6SY2auyeoGa1biJbmT1LlVQoTaEnIccAhlpUXvGBSYPMEHIw%2FDKpKDMrG8iLeAXJFtAReZv%2Fqjkyn1Z96du5OtT7gENDJXhlsJsY6G9yZEl4zRAHH51hjlr%2FVJvIj%2By%2FyY8gmKWwZivky6xh8UpXqu8SJQOyDiCUKjHSSlYsb%2BpX7tdvcp&X-Amz-Signature=10fbbfbdc9b0cdbc1b5a2c3a0b537cf956114ef26e8284d1c645a726636bd4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
