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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJ7V7FV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbqoFf54srKAGR1cCIclP3vKKf3s5Jm%2FNS4lMgf04xNQIgOY7%2Bjxs83KGzQhB7eqkWWQn3Imz%2Br2hqA98mVbqEsRoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNotN86I9Ph7kRfsKircA7NrYln4CAvJlCkuzSUTS5rbR4YP1J19xQQ5rzJk38P9c%2BLannVtWSvOU1oECkwl2NdUJjo7ILPVxLfi30IPkjG%2FeEO9epPFhrUTbRUfi7TmayYjYbyRGMLb8oUySMIKnqywffoXkZ2w74nJuqYl2gJ3fNuHPjxC3PgyEZjwEQfnjp9Jvh4uMGIH70hH%2BHMkU2X4jzMxZimOsl3aFEtJqdflzBtLknTyKLMSBLT14M86QMjmxBWPx5kQc19WtUIjnBU15tklxBRWsn4diRji8QXeSNCp5KrLApa3cVVfodooEfs63IAitlm9vZBIbeKLyypKErc8rdtGBj8uyNzhdb9jxjMnXoaQC6LWZlO5CcJhVzCOdRT7ecfLIWv4ChdDukIlyElh23ppH33CiR8Q8OSM%2BRC99d5mOUUt2EzssFeKgECfV15BnBisxRMGspDzcdCY02Ks9uc%2FgAAukC%2FHfMex0ZgpOXIs5lz6W9l1nr5lREG0fLHLje7WwRCQVtBlFE5IWGfKAfCNZKQrfiw9LF0T5awqC63ic9k%2BbV6byjldAhm0RYGezUF9UslIhA8ytwSW7d7V7fmHmcRDwspcJ7kyBNiY9fXLC0lkagcOvjoDWociFRj3gqtBORtVMOjA%2FbwGOqUBh3z1WxC4TJ55K4sj0GbIvb0K7g446C8v8tTKcxQum%2BvIdgAff9OZgc7EVBjJGjhjA7CmJ%2F2losZjOtNRQMXkeJoBXrbQjcBRc9duTfk5BVQOlev4JDEcqiYMyCEvosC7gFht5QYoFB2%2BBrDXqVKRWjW3A%2BB%2BIgEx4CrHZm6zCdX4P%2BsETBdwRCp9D%2F%2FJD5guhQ%2FP2Toge%2FtS8L2V3uJd48pmZal8&X-Amz-Signature=d09151514dc8083ddbd921d7cdca2db9f29a49d62a7d59c90e748b38bbd22441&X-Amz-SignedHeaders=host&x-id=GetObject)

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
