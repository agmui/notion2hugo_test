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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGRBSA4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa4r8udn6dgI2kIHMhKGOB6%2FTDrW%2BAaReju3ItWGt6OAIgEldMU6N0QTkaXNn1e9sJQW6BiI1G6lYIfdOuUfxx7fIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkM7o6%2BG87EGlfbHircA9dF5JKXyptrlbO9iqt2qy%2FwSCuvysBiMBuV7n2HaodbBoE7UiAc%2FTlVsaaLmWKLLgKmvXrvkPGnDz1%2B3rXsqcIpr6jP1Dt4YXbVfse8WN2rlFMOfCumS8OPhR%2FXN4WTWP6n77fIXBgu7Ioa%2FLEiXLuu1aaxu4BtT%2BDrHm1XGWt0bXkvrA2bHZycbZvLTh4sL2avYyqrIwKbwSxj03ZCJ%2BOZK%2BAkNZzHtrlP4JfH2yoZG84iOkA8D4U2HCNCZhuRrOEA0V6QOnl%2FWSO2PHpMI56Jtja1MxBZVeFJWIIwPLdrJHwCTH63AstrFJv7th4rGusJY33lYgyCEKjxWDlKfTd8zMhZ%2BJWMJ%2FRLq1mLmrTOtMYZrQePp33DHuP4QLpZIy9XEPa27Q5IxX%2FF6mp1RsVZn8qrdeoOnICI%2B0pk7B5LMChNFMRofmnqzEh1gsTuJKz665JvC0u6N5mylyCdkTrfzhrwEvF0BOLOfITD0nm1FfvfJFCZuSXRfq40aF0XYOMCPKL9N%2Fck3KJ9jdyiAEDVxf6SKh5Vj609bzxNyuPfcZ3WXTxVfbd4TEWcOVFHX6T5zS22ip1xfN%2FRYLnoe5x4QXu1%2BZW8Mnh0i8cGZPhCW4Hp5gt8f%2FmQUJVnMOn90skGOqUBxkGXR6s8b6EUbKDfVrhYM%2BjkK2C7o%2FifqN2qHf6OOxwRMwBV9LsqdQhCIQsBMliN%2Fft7SXQbdIAgHE231Qjo1eqeLfh61vc1b0K7pbxr%2B8AsbtAO4myXhiPV%2F1POt4CBx9saskK4P80lN9WCoDn%2Fl3sExRuyy31fSi2b7mZeeJb3OYr5PkcPLyn0bPZ7TswPVIIjfKViN%2BFiVu4aMx0UBkeu%2Bg0t&X-Amz-Signature=6132eabe39c439ac05ee4145eb4e04a875602060a0d998ff9391706dfda50971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
