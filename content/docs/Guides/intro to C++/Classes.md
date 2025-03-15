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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWXBZHU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9RuzE%2F4dhgGf73XiwBXe7n8ArfmNhUpLoZ1NrcTimoAiB%2FJTZ6ZUUuCWhMo6oAZDkhh6Rzq3VjfXg13Xbg8j8kdSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5i4GfHIqE6DmcdFRKtwDD%2BNb5Re6l4LTGfreUkRwPL%2BX5EqC6Y9pB3TTOQyCfu54vOnxfFRbR6P8OcIhY4E5Cm7TxoKohIbhKvTBdK6er8vsVg%2FSgp1Li%2BJJLrRNmvNLWy9IG8Cjs0bxgnaeJ9TR7NOyjI6MRNHj1l%2B%2F3KPH7D6R8%2FpIeWLBcF3Vs99rycbaFAyPtT0ilkDIyOab12Km%2BaprohPSJEJMDJf2EaOpqDbi991GIZsX%2BoROGFrbCLHTAcpwIbkVkFASQkLGNEXJD4PK0AiLV7VIiXhIT0m%2FmVbY1O2ijs79%2FiGC21kSsmFXPB%2Bn8HFRjHvLulkRuXZxcoaVR6beEfXUwNppukOcpyiNr0xn%2F4GAxl%2FmprmJsT521wjglDfyRJ%2BKhgO85jbEEmmb5Ghi9nR5MXzMQYqkJXVBmov%2BAp8flIDXD9SMsCBctQ1Y3Sx0BnWBVN5Outg%2Ftzh%2Be9WxUjlwD1DStY5%2BiaO5iVK9WK0DLtx3m8yacjacrjNC2LSJOG63DLr8vZJpAAdzPvzwzgPXsddIaAgJN4t2nAPjELPGY1najP%2FoAPXrMli8nNmVFlEyuo4ge326ynk1BcAct6WU%2FWrZ6uKBFby1jwZz3TUYLd2jWKAtAvZl3XNqV3e7PfS0dkYw%2F%2BHUvgY6pgH%2FQ2xXPLgf1wDJQ3HVfuYMP%2Bgb95rioNKpToYlQo8SWt8hrjrJLlNn8OgRw8ZyUVIk5Ie2kylLrJh%2F3w%2FziK%2BmN6sqDwO5ElAyjXk%2FINl5p7diM0CspUSjQwPIOwXD0sS8UBjE4%2BP8bXez5gKRJyMDRvhcJQmYjMjaTlhwMQqCAfee46zKkNWiqTDecoNy2pfjKfaMJCVpG%2FwAS%2BZ1o1vae9Bciu8M&X-Amz-Signature=3f06f5d08b5660d05ec66390369fd8c8b099423d0208ddab30cedb32ec080788&X-Amz-SignedHeaders=host&x-id=GetObject)

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
