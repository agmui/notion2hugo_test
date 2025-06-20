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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPNMKX5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmTEAbkLlhhwIbUM22MW89g2ysPeUjv4KQ1h9v%2BNhYAIhAPVYJr6keRIu5wZTIRFyuj%2FMG1LRqALgt%2FoYAd1FbelOKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOY9GpcsN3JNr57ZEq3ANDqRdqskbUdPg3YB49jLxh7TUvO3CJ0EkXk8Dg3KjQHWULhsRA4HGVc%2B9dCspiddLsvYL69jDmeFXv91dHd9Oa1Ewbtq0efNrb%2Ft9290iwKMCEYbqGXBd313%2B4jYANa4Wnjwjacwrgj0LMBjDH2B8P0rGYxmDzPpm9935IDCCubK5D38Q2bF4SNOeRXBwIfP7uYTTjTGjIePqzQw5eMIO0XajIDOI5tl82VbayItI8fZIvDFujbfvtV%2F4aihyW%2Bz2Nhst7Q7PI%2F4je1JdxYG08PV4nBRYgxDajfRAEyrWdfKnXWfpgi54LChoVHvNyeVchAnPHtjYVxntiBdXJTXPkv4YrEqdRVsVy0ZR01kmj6n5k%2FxnhkYvVGWx%2Fs4%2FwBMdScnU03nzXIhDnmFUYOpMNzQgPzsozmlJWvhnHTQWPaBdGit4mpdbPO8H%2FnWWZZ6GnyMpO4hdu8I8pKzcr9WundWTALzPqVL35hXRzmc18uXHNc%2F2x3Xkaap%2BPzjpb29gbaLmYLr9xci575FAkCm013i%2BNnQqbiCpySIr3m2jivHzJsnzXVzIRogwt8lNAEdZq5sYP%2FHcMv8TllsUdfwUd%2BzFHr8m7hH1QG2fUWPZVeSr3C3o8OKUL48Ft%2FTC1pdXCBjqkAU1mIaVRJneybpYSH7d3DKmX75HXF1OKhUjeCjD6pavVlWRnxhCTRncbaTmve7wT67LYyCOi0G6nSQV6A6rTIKiuxC%2BXvXPnkSP1q02Y9ldSqd23s48QMndBOLgL8GMC7PLnrAAnp6f9PEPUDAv5rW0t%2FAPNLlJCB%2BRikX4SAkQIfG49xkSxvJ5o8SolEm5CZYn2uuY6J%2FQ8SNs2dtTbtcOFqifi&X-Amz-Signature=dec8b1c7b0e0c1a0249b82c1ec1f3722481fb15c1761fca2e089aebd3533cc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
