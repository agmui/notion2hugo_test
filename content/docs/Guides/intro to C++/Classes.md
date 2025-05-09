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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGDFI4P%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCskS9HTddn%2Bp5ci21YQltxFIIbkAESt3TtMVl4AXf%2FIQIhAKUpnIF81OclX1EImXkwtp3Ka8Ir2GmBYAiJGZ%2FTiykQKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7V8qgYs5Dlr1OkHcq3AOJOac3KsICoFmkxdIpw6DkC88QaWbMtcW1rqmU2ye96cY354zBmGvx7c3koQTf1HQEaLCuqFweKaXjv4b%2FO3egryhNusFpZqaJNs0sMsqKxiwsmd57seIGXiHu5dKGhGMeFlp6AU2Q7Tkk0MIlcLi8CBGoBJHHh%2B2xyoEGLzdXbpFbmdb153bY%2Bl7I1hyuDk4qqC9kIkspQVfHh9Sz9eAEQXF4R6%2FWtMuJgkQOr8%2BisvwEGlD3mjhGNciRO4eH3hDqVMJpPHyFZdCf9KhHBRLfqK7J%2BExIsq40O7nK6id65FQj%2FkXu%2BgLwpAFdm9FkDkzucnwnsr3%2Bli9JjQn1ppSWY42n7gi%2F4MTccXdECu8sBbpjyFK6WuNMb%2FfTgDYfynt27YddjslQEawABe9xSobAnO2bpezXo5e5Qn14nTX837VlacPapz9vsX60%2F82JLyhZj1cqGxWgCWiMNgtR5GOLilGer6%2BtMj6slBhG6z4VkJN10ce%2BHcI04js2gtS2FbSIJyEpyb28kTWzqIW%2Ffp8qeiQOoeE%2Ftptos2necMsCWZJ1w0m6cbJADm5lSmACwzAiJuI54qDM3Hkq7o9FZWRLV%2BB9u2CfQ1xTGN7C5VmqVLezhnzqvNizHZbE9DDGlvbABjqkAYBouublrn9%2FtwVNAt%2BDS2gGitm13zHu1JiXr5oIQXMUmC1E4F0Ys4G4qYEVnEyN%2BjM%2BS9BMYoIpooWSzL5s6Hz3q6G%2BT3MffG0oTcrOp23Udc8yslvELJ1R4ddo9Po%2FpE9FtE8pzCoajSwYin06NNVDvE38XbOICOhnB9GlrqUlO2uoE3jqiqbFKeMF74P6V1hTG6GLCFY1o38ejNurjlUHIjFK&X-Amz-Signature=dc85fa58abfd7f306251666560f96564bebaf06ad51b8857ec8f072c6009dadf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
