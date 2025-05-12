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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T27EJD7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCAZ2zv8dCjrMjz0YyPM1b4QHs5N%2B0H%2FdiMaEXIdd%2FIQwIgTW0c1eP6sbthD5CKL69%2FSmmMeBW5RQvYzHFiQKmPhKMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaqYk%2BGiDxK2V0BVSrcA6wZgGCX4zAAKzTHmBp0esTr2arI2HDmTNV7hHSuRt70uG6eyardmsM6LEXkGOMMo4PnjtM1N%2FelIBYUUd6hFHKk1F5lWz26MRvJTDAu5kOZodSIQa5GomYvegGlTHWqSKWKxQTQVL1icbX2s7zir21dvIHQis7%2FrOuV8p574Q61qYmJFwRIvaevNKWhYqKw2WmpGqKt83LeXtY5Q%2FFLXleHIdcfFzkFKVq8eOgsGDdyllF%2BNXGPu1ZnUX0Rnslf6XuFmKTVLPzwRkJD10I2z9TjdUDusUMhuSaNVssqAqKBO2okxeBWzqXc%2BS8KhBD8enK9TgvXp9cCuKNzMdgxCN8DRd1zozbHXiRiYmNEsVIhg2yNF2LQmD4X3hVIqT0SsZ%2BoVQ09wu%2BOfk52rAejsbFBQ%2FzYJs9HwxbojDW%2F5C0bVr%2FeuIIUX5N6qyzJGcvs3i4%2B2LEClWVndVpjZwSBzV13LxPl6OQ5usKJv2cS4%2BHaE11GlIcTV42LGXdzFNMJ7whZl2r%2F%2F6OjQA3Epkez2IOwud6kmEMiEy4WkPP4WkdHcXMl6LLa2S1ckIw1SP3u480lpkpmTyr5eITyhKJ1jnnbeevRRSftfKK6HTaJlpCrJk9yp%2FTmVOz62l1sMLnsh8EGOqUB7hm1J%2F1QDNoQug5mldDkLEbVbNObInAZlBgrku2nfPoo3Xj3V7hbi5lm00QYTPAc3l8lT2xDE2xQQVOESoS7%2FhpiJhdBowCZQarH1tM9C2VhwKElzwfj0HL4KVtArCVuQL%2BcGFPJ0SMYHZdzs7CG%2B5HhfDzfFCfT%2BXzHCMIsOGpwx39sqUFKqdUfe%2FxWkQdqcUa58Ox32Yq9lrerLrQ5j2HcDHND&X-Amz-Signature=f9cea074a0c2c81d6caeeeda8578d23ef9dfee053b3d65a88fd4b3b7f7d97e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
