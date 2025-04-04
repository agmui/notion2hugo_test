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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUCQKSZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKJxdoyoPp8bHBBCC9jqgHDTQLwxajUS%2Fm88HW9yubfAIgHHpb3WnJIKNCSKIkGbveYg%2F%2BFhAGVk0Vpa32i6sgigIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDOfyshc5%2B0uz7g55kircAwBxpLa3AgMW66B8G%2FUUpi8yevFq9AHGEGYyXQhla%2BxRQ4uyuH%2BQJFA0Eqbuj19urdrC0GquMn%2BBr4Y8bczYa2%2FY6iEnbUgAGTH7TUit0IlguB3cTYdicnr0C9%2FH4gZhQzBfSt89sazayJXPL%2F6RlIQ3Aq%2FuLTBQ28U0FUJT4MIGzujvwnOp8NeJn0Hg0ypLns7CdRvSczs5iIzTZwSLEiYMTim1kF58%2Fo4sTfAxJKYCfP2eDKwB779Mi0DjB1%2FEiWbms8bHddJe4PaTM36Uei9UA8uJLGagpl5tHN5SiMm%2BgFb5gECdwn0t6zZekDj5eD%2BICx7J2Wy%2FerTMN2hbfyPZsBQfg2aXySXgF76vfnA%2FN12ACPmC9OBNRITfo3hEze9ZYkgrniMkCcQCz3HbZV0Pr286x%2B8ztfy54mMQMTfqee9Tg9rEkIvcq6kS6q%2BRTyW6vfc91aZ8WxcIepZrZZiqWDz3t7Bn4I1r13JfgcV3vajkqAYBaFjoB1DVHSX8xIkNFwFW88NnY0%2B0FyTrLjQVoXuCHJIO4d76cR4fpURI57xvDnIlr6kzKIZ2HsdrbLjOYfNQPqh5j2dLAil2UYe6ZiBZEhDuu2VoV2kU2TwOtEUMBn7SHj7ZQ0DFMLTmv78GOqUBOo%2FBWi48%2BktNH9AnRJjD8IRcFGJl63DPCAeoW60iRXLiZDISpmTuUiYYxedWWn84HdTn2sLYHW9ZXcfjl2GX4nZigW3gHPRjIHaLkS7SYT%2FlqucTMfWuprI4OYKt2idNn4Z0nEr2lorWDgJFn%2F9%2Fgc3TFhVZb2kFOOKVMwT5yqsKsvnr2uRu0dGxMles9PRZdLOSWgCLCpl5%2BgZP0vhTc0RJxw6q&X-Amz-Signature=4d8f7974cc7b6d1ab1e24971463d513324da2f392b08338d31f950848aa58fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
