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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347BEFSB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi1bhUuju8Cp3ITMs3hKt5QCNNuTv647K69adFwxRP%2FgIgewNopcGCTYbaajgUAsUAcvfNR6rdCuztJEs42xDAp4gq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNQxYjuKmVgT7seZ6SrcA7ag3Np1Rz%2F%2BrXVmNdoOxzZl3I%2FSvKmjqI9z7ctphCBZ3n7jN5IUqKwzmXglK5d4VujUxPqduGb1qG3kMnuEYqLeY8jRqXg2S%2FhAfMSfS2bFFBS793Azxg%2BH%2FJRao1AKRIkGdLYCioq8cNG9C%2BFlynYGx5k5niet4qTKtM1oonkS9wJ8nyMyxx5WF%2FoLxqYECfG8RSVkaieN8bAQWWcDQ6SRZ9iNlRP%2Bpbvf9xcWKZ7r4Svb%2Fsmax2vouXp6rWZGT9Z9Qju76onTGcMj4v3RLKeOkyXssE3eh9kf5x2yB3lEjBWkkOtkrDCAC9e8DTCnEGP6YTxQ9bkHFmEUcB3eaTxtYNAIc7E1E7y9jRe7PiwUk%2F25jlOg53Rcq2TIphRzWYj3NwPes3aGrfUSduoRdzPPfuaeVXiXYocmU%2FFA6PNp%2BjPRlND%2BgRYStDQzg8B309CBoaaHke%2BXRsRiuNrb6wl7etxw4UrbMuxyDbsKBklcFLjWv8tq2ZpFNSAA%2F4UBqLeWWFyJHA4kOMzzN%2BrvXSL235mbHOK%2FnT78e94ofDf63AmTKKJMX7t%2BCsBEE%2BAHn9rn721kjDM4g5NcobhgaMTsjq9iuMX2W656UVu8nBdfbNa7Hd%2B%2FZj6Suo%2B5MJ2mu8QGOqUBTP%2BVJGsEnOgsWdOZiXLr9nd7OuBl8gzxQ1iC2mEF%2B3Lbv9A6a7QoRP4VUQaAw9raRWSYXt5oI0biXD86LalaeOCnoZk%2FVBoY1HU7vTHVGh4BG7WMjGb6AZtryolKERjSrybGg6IArfj6JwO5Nu0cHEHgv3uGeYVc2mCBsi7HJS7w0raGrEaxoI%2FlkxyQZaRr4KoZBkVugpJ2%2FfzsIFEcboLvMt%2BZ&X-Amz-Signature=c4379af27353124ca99b04d54df5b94dab61d26b818eaf8f5bfa519d68de781f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
