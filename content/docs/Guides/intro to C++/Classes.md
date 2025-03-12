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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCE3XP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC5bKiTYzUyoR4RUxIg9sbJCYfKDY%2BciIWekCQcVOEsHAIgVC6rUNOlIMztHPlBNXRlQv67VdEWIeREcqBf9im4uy8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZUXGM1zPKeUunTBircAwfCIVgyBphVKBN0JjMhn0PPQORVxhkkSHEzyuQ9BAjgoavM7JeVp1YLw%2BB%2BON6g%2BZ3bone67ZfkrQTtmmE3pN4cVlqF7hJ6M8IwSTQwCd4MbNOqPApB5AXj51mK%2FXLHrlRLYEwzHZGmdOHFpC6KjweAIT70oHycogW3oSgFsogi6BDKCYTbI5IKMDLgFxprg1in%2Bb0fjd8vP3XmmRP6dJwAqHldbSuu2VvsijxPKpBvuZbsM2lj3bGzio715D7sVB2d6j%2Fk3VmrQqLwDqmC4JGe5qbiYuOD89Jo0QGjWsSfbmRNzy%2FrVugzXq3YM2Ek52i1XS9qX0SR98XRB8H2nzgtQUgUwys%2F2IvLg2aOm5RFp7VNcKD4oSUmDhFGbh%2F%2BQBMaCwCGpiRwncNSWPIjG9fHAqLwIRiktgam2pkoL%2BbZCuiDRyMHaf50GjPUR%2B6ck3HbNawFmuh3H54KZt8WpqcUlyK8JC2R8ILZnCnaovP5k5VSOZQmVtf8jIcFXOWxWV620%2Bg7PF%2BwhfmKkBQa489arpSyC3zivW%2B16DrFIHvoLJZdYb8K%2BfjCSkS8VAQrJND3zCApncxEOpa5fw3N%2FAiYtjfXEyW1jXYi3ptvUIkDDgVu6sZeqG1vj%2BouMKraxL4GOqUBqDlHiLEXziwz91LR%2Bjdt6Ake7V%2BhWJ5kDNDuoQKUjbfEpI3djWNYKtx3qIEVFcfbhWHElO%2BtROw2Vr3Kars4aDGy8mayDQmQu%2FMnVYK4lX%2B9Mu8cYSgO1JHuGvAraa201EKjof3u9qQTZ5VLXKZJLhyhYvYkCNvk8Mhm1lvy2iHzwI7BwgAVsZw068kAZvzMRxLHFJ%2BrRS18B4rnzs%2F4c2o8k1zr&X-Amz-Signature=c4fbfdfdc0c475f230c9480adcfc4553054581cab3ac3c81bda5f1a4a6aecc85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
