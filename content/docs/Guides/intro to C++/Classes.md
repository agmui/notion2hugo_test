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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4APYDZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq0tSkmJn0K7if5ID%2B8vEt5NCFl3HQYP7%2FiItU89GqBQIhALFhhXREdsQRUVrnYdyNQCrzUzDC5LSLt9W9dEEqg%2FjCKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL8NY1FBM8v1qKjiQq3ANdfrt%2FEbmGH5sx4Qj6EYhLc0KqclrGmjn%2FVrmaQO%2FhBDyZTgRO2nimOKjRzO9Y1g5V0Cg37v0YUJNBZKGMiTilFw%2FbvxhvBp1DN%2Bs2%2F4HKCv2kFALf6T6ViK0JRB18b6XqWC4Mrqo%2FZmPMRqKLdt%2FyFDLxY%2FBXWPbaJYGbrKJ5x7phO9EzKSPEEu%2BseSUHbJDE7l0oi%2FvmHY6ENaqpdqbnk6zJ1C21Kqrw67XTI%2BH8ZYdJ2f7V9B7xf5Tu%2F5Jh4DxgBVN6jNqyj%2B12MQU6HqI4gjOWYVD5RG1ogxH9GF867MSwYOiqqKkiV63snBJqEB%2BSJcNWUoLHhe2fr1v7kPuV8KcnWjtkqmQf%2BuCd9IenvI1%2FIqs6gsJxWk4qUUHofrjk3YORSyLUkjByUz1ZXImfA2iY8KIleX%2BEH1TK3CXAJ8ITmJpaQpcQZLTY5H0M4J27m1Y6VmA8mNnam1gzvnU3rn3m64nYcA8wB8IBzdD8HFt%2FlDiY8pNN%2FlG41Zugy6zlwNYk9NIEZveMooVSZ2K7kNbkPUBJhJPSA7VGruLdRIYpDdEzTUlx5pnowtNFC9SOWmziu%2FJwzxVA%2FRp7z45M5L5TOkJwqTCKRUppPW3WT4QsnPlRxM7Mgv2EqzC3i8LABjqkATQxAOMWx%2BxhhGKjRqUPQ4E0cTyEI5g6XoHrhUVIyQy0wjR1zasMQnsWY9DtyME24Dbqo1b9o9iyhPSJ3lzvNZl%2F56PRfcFKRBKmkRblx8fFqb4xFghuoYqTZK0ORw515wyE78OqQ4FqdHjE0S4HXaeVJB%2B65UF%2BBb21Ux9QdOMj4vYqtxSGhgxuaH5T8jTmZilnAgy7xjKU9CGAfaXj1piFkRig&X-Amz-Signature=efbeb5f6129934abebfd0ab3bcf4e3497f8939be0c87f3e35fe4fa3b1775b9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
