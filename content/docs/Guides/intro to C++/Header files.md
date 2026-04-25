---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TV3I5EU%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FzhPL5Cj06qG6kMku2nn96Aluh4el9yCQjJJ8jU6NbwIhANZzK%2F3sFfy0FzXPFn%2FbttDZo0LOQYm%2BIncC7WwuXP4hKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwgej2pk%2BzRN2SlZAq3ANgaOwfME9aKWvRb2AQ%2BFiosyWDR1O6AcXMP9Q2ZVN7IbLsxry5DVt6Of7QBml0JzmdlckIIn7cwqeOayrMcQMgZ5baRykGAPmsTddFJTH3rrFdBjvKK8HR8E34WdwlvhhHHtaQP93wg%2FYzdqFdkgd%2BqXFV735v%2BZQxJibAIJgC5ZWnbxbmgQ62nKio1zjJkaQcjrwZIOrGH61zSaQtBrQkqluBXqOF%2Bgah2VqEtqKfDyB3k%2B0Hr7AKoOlk0glwTkIWE1og3Sta8V8krSBvBVKwge7Td370%2FwF6Etp1kDtXwNRJuSG4hR5Il3pZSBHXK9Mncw5boVldy5mLpDB9vyD%2B6Oh%2B8zfo4zCGquY6fDelQ%2FBTGfBHAmog9VNKnIbCTy%2B5mfwDkIiVsCEIjt9dIvr%2BUrxdaMgD6yac8%2By%2FHESa15rYzWLLa0SudOxuaVMlcMS%2BUGaX%2BBYI1aeVcFVVwS5c%2B%2BpzZpMeWjlejgVZkjJ%2FmXgdfRglnnMHLZT2kOpIIBkYP56W%2F0fSQTCa%2FH1yMuJTCgO9y4gY37gW17txDWwzc5Je%2FrLu9p9I%2BBuzCOXc60TSljTMsirr%2BVUIyU5DO1IYB6d6i5GgGlh44kdtTME%2FFlmixTB28UfPmI29sDCAubDPBjqkAfVd4AiAF%2FcExmT7r%2BXB00RKwZZFLO1CZqZKDLPMUey8Y%2FxAkzGG%2BX9DVEiPqQ0r2jltnvEnkLIxi1mU2Yhx0PmVRJEtK6pEwjYMY3lkIdLFmW%2FPg01Bb1IT3cJI3v8gDhJvOB0yIz7w7KM6uNxHPrIhSHauBDjPov5aTh7uDp0zb6dRomORyOlD0IPgOcAaFJlfmcIQEmeeF1fwIMu6HEnoS3NO&X-Amz-Signature=0d3b2e48fa601e96ef98c9ccaea9d8ad3e53111bc1db6baac81d073dff537ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
