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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CJFMHZM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdbzKs3RtTSpmpe2evqErHzHGQYKcPEGE%2F5uBk%2FdCZGgIhAK7nrwGwyUE6fbCXrzlAgzrNeEc7ui%2BR1h4HtHxRMpIsKv8DCG8QABoMNjM3NDIzMTgzODA1Igw5n8I7ohd%2BIQCcVJgq3AMZxE9Ra4dQJ5KBTrfXoX%2BE07664y0UQb%2BBkAW7vQFMf3wbHT%2BfITe5Yi3TDdS2dwpr9ZA2sQHGOlCrnNnoSjIJGceinR337P8tzEFWqHkHOuPGAkj2ieiz6MuypfcWg%2Be%2F5K0IzAV6u0NBXQlJsTuUDyCHqptFz1IWEP8Je0UmmwKAWrMRG3FXIkUT70Un3CqiyFv9HuKIQ9erjrVjhilN647fj%2BBNB7r5xhYBdHBRnzheT6ZshSMme6oThPcVLpjxFzAEzfM8DRqv%2BpKSgBlbdRnq217RXkrgVXQB9JfvSvP3snT1oUPYwq0ZjjbxLaGA6Zx1DWcon3iprM92%2FqmxmgIvDt3lcrT8qWIeoH5pvS%2Bn4%2FlYfD%2FBb%2FNTpTh51OXsLfooQIddINp3S8xeZCikZarVFvuMnCvGOqs4J4cMTHxYdx0VtHYTA7zA5DeZrCpP4eCldknwph4lupxQ09SnbqtHXlrxibSGNQM7ymYHVCvKAxuQS2HSK1Wt2IM9s1N5R7OQPW8%2BrkSrZz1wWp5lqDWGLKxuDF4VyPgnT7le4NAa4SJYXGNv4lMNvF3rGharoHa4KJGSA1P%2FeRCLB7WxAA%2FcDk%2Fau3SwK24NuMCXl0ijRCKpJ6%2Bp80z1wzDT9qXBBjqkAYxqbzu%2FrsB1AB%2BKyyWrjqyfJlzRIQrJhkDoMzh0z733k2HQoQD1EsnmR1%2BNiyS0mQ%2FydC42M5FNMCghh5T3PekTMBtWKNepLo%2FVeoCOtiUE1hIGc%2F9ptCgs%2BndqIzdfafoQhAxF4mOEhs5L0zctbxi%2BSBWSiGD80S37ikco9PQDWH7Myl8lU%2B636c8nJ9KOYX6MjvHdn%2FcEnDV%2ByBfDKqXlOb75&X-Amz-Signature=aebd1b449ac1c57635535a62bc747dd1376d49e45d6d231dd243c2fd06644b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
