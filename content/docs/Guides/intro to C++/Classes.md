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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTNB76N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK1OMoiFwFPe33xVaQceMN9q3eXtGN52dCbK4XzUi8owIhAJFSFj3dRpSiEf2kowFbgtDg7eO2CHGhPpszXXDXt7AhKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpYPJgXmYIFmWmRq0q3AOmDRYg6soqxwnUk%2FP4UTWIwSoi8ARqzjuSCN782L53fZp1gK265SlJfsgxXYa%2FdVUN95GYFRNzyCgDGv8dqclvLbLnEbBFZGsOaBzc0EngIwq63%2FgvfcKUuCStdyN9VQfBPUj7ghqizYlgV%2FxMcYklRMSzk9vpqhI%2BMXPz5MunQshm58qsZjhT%2F71WHo%2BX3dXVnS%2B2lvx9NGbIGEq%2BK9B%2BkvvMb3kNCIdtHQRh0dofmsqKZfzYVnhoeFRl9E%2Fc6OQUGdIxLyezxIVvN5dOTPrT4bILwfSJZF7cWnJHOSL%2FPTbJs1wuTE9srFEHnKJtUlURg2S99mLVrwSPQ8Mrj3XEAWOI9uCv2QjrnwEzsJnYbe5yhR82EwbSX9uh6QfvtJHgO6mumXc4%2B3uUVampYqu%2BUn2YCEe%2FT%2B%2BWrhhkruq5HIxdzhdB%2FnmlWP2V7p0avGIUgBFXoEsGjpl9k0hEhNT5cm0ntP540XiUpmwYsOQQfaPFykv6EQTLgW%2FhN9UWZFnLIa1a6suR3dGlTOeO%2BLy30EQtqHMyVrnzFsFpPhUUNj9vDWuVW323LkUS%2Bst95V54ML%2FcAEMbjH0TU3r1gjLO%2FiBuIufT4pseTDwChmQ%2BRasPZrZ6JiRaJ9DgMTDPxb2%2FBjqkAd03yfxybVACNBmGpXQgvXbdDtOUCzmtbZsoXrhfA7xyErospRy3F0RMpuyWuS%2BxSLnSWcu5h%2BdDCh5UqN2oS9%2FL7%2FcDTWSkT2NenKh4z2YrLmrpOWMc00cD83CmhX7YwRajuSEo3RCd2J2bfOLFWjql%2F6ZIzJjuCDypXkQj9qhEaJP11w1cQfntMczVF12MWGBF%2F1K7Z%2BaVHcstgKB7Wbqf2at7&X-Amz-Signature=de3d8830d2aaaf53373d62f74e99ccfb67727be120d2f0da661da5b573c813de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
