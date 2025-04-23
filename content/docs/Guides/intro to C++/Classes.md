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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYED5WG6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDR%2FHqVTsJR3aqfzrOTMKbvAoe6yYAKPmrZQFnD000zGAIhAKcHEQEe%2BR1lKB9Sf8deYNI%2Fp2DxP2G43ADMpUAsFC2hKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbfFaZMyhCSjdYhAQq3ANe%2BafXFzPdPeWeMBJUj78q63JKCID1WICpn1pRrdN4Hj%2B%2BVbzTq2DWaeor7aqoYP9wYYSHKW%2BIVW8QJeid5bm9iM6I%2B3V7iTkdUJyPdarAI%2FpR3mI1RiwtgLsGIph334WRZK9h5nBqstT3fno%2By2aJSvE%2FtobDo6nO368tnq8BtBfSG%2B9orWiwu5ItysM7AQMt0cMaMLpG3dBvhJF6FzGrZ%2BZ1BHuWDB1XWQ%2BePWVctusVEQp%2F9LkToJ2mHHZgxMch9d0hxt4%2FhS8jWstQoBbz0Awl2sno6GPYaHo8wRx7vW%2BRZzt5oB1XH3pAN1YgoXSraIPG09ebBASk%2BTCxbAN%2BZb3aC0AUE%2B7pZcgny4jaulR6WhYM2NFl3yoCGDlXLIqAodnt4knBbUa%2FnliddmyhvQijtscUSpSfQi6MGBJL3DVVZpGlM0tBlBlPxT%2FinCsQsvH8S%2FIWFVnV859p55Tin9NPMPHpoOV8GuMdUzcAY3YiWaRF%2BfzLqFFa3IZLkl3OyAzSLCW5JFRtU9i0bmYdh4RpLRV1mY0kR9hBA6BHWI45QWEHcPIDOr5n1E7ZiRAbtbgZ2vqrCd8aVRnI4Sisvd1X%2FPkIIZqqe6FKHAKK5BfyXKJ8zHrGOfGdeDDgg6PABjqkASC%2B4ItHlNmGSrb2N4Hnhgp6OIElbcJcSWQ7D9Lx5S3bYfTg7cf%2FjZFfbS2Ml%2B12heoJ%2BM8207Glr%2BSbNnCYv8GUWzWhl1%2F%2FwbiqIKauh6qR001SpSgZpHMViqCuwrJgvMcSD0xT%2BusQIC6hHZRHO%2B%2FR03JLBH6vapSOiaTAfmchzcIGPJzeHbitFj1juyvkvQ7Bnyy%2BBa2ySZxRiEiDuPYTE7z5&X-Amz-Signature=e657c940ea0b7869a326d75b5ab90e7feaf65cf3a702ab2cec11b8e66df7b748&X-Amz-SignedHeaders=host&x-id=GetObject)

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
