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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLAZEQGL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxOzMHNOy%2F9%2FUncOCCEeYAgneUcbwpF0Vtkd2zLC2kBAIhAP4Uz1B7LyNnclmMbUiDzFBMs30BZ43IBr%2Fay1h7d%2FE9KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjjE%2FQYTVSPm0a5bcq3AM0si2mSTeXxN2gIVoinOS%2Bz3hXeoZnnMnvfGEbio5WcjT7x%2FHPXqoXVXUovu9snrUp5GB4M25V%2FYBH4XldugxBnZCWZjd%2B8TxnoXkmotUtblTvmu%2BjivQrvZRW3OakjclS2lYWGBrDSMMCWFLqk%2FFn11dEvfcu98GYxtB9uqEvE5PyfWyBkUSzmSsNm8NIlrL3frFHKXRp2i%2FRh0I75c4nLC9a64eURrEJ5e37Xch%2BZwj%2BhUV9si8ZhWDUvhxeAFVVCnNt0bOFXigndI04XsKXn6xz6jKqbxtrfzg8uDPOvNwDMUnB5j9F4SS9Bhoo5tf%2BhgQs5BAR60O76ncFhDfm3y16qITTMDlAoZ78DpWDLPbk2TNN%2FYmBmqXw7ICn1JS3EZhgi%2BU%2F4xcH3vIgZ5fSUSXzwxs%2FLU20Ga79dbsjECJmogEpFGnIa8kyUlJWt4YtareaAyZqWXp%2BWQM513MmEFyy17LxQ30Rfrq4svyjSMl25FngLVjo2ir8NZgd18d58gYjiVCrOtbDk6ZQi0w6v7teeUas58sJeN998WqdmHNig3tDqenHtMeRveuiWzuClUECcvuF2lPhN4%2B6gga0fvk3dUcSl7H2l94aNgNCa06O4s5zU5NZbuv9bjDfr9zCBjqkAQXkjBgnURPe7YhnKetSnbwins6PSys9Y4T%2Bncx9HlTRjJXuauAeBjT%2F8%2FvlaikkgMprNCNdhvu8JOZp6gl8Elcc8Ls77NPIq47D6kCzgGZZni1%2BBs5oRJziejaMVxzyR1fzKidUHuQlVht8H8haP8YB2MFgDnp1Lsn3tiAb%2FhvmlkcNw3uWeyfad8YPB0srm1BMgHeCPFYe9kOxVBsrb7eGg1X3&X-Amz-Signature=a522629f593f5a9d2be14e13369674bb5a8f1e571c18c412e3896037fcedf5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
