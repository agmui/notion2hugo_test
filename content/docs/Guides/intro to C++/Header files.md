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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBY7LGZL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFYdUJR0%2BH9Bv%2FQukQq7N6tbcWTz7wnu%2BbBw6F6KoANwAiEAhwPF4nZXcOX%2FSQQYct%2BbgThAF8VeaYKxI24cRBMbWpEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FMmyOKUKO581PWYCrcA1ow3r%2FEqA89%2F7EliLpXMwGF94RoLxslRdCMfarJrYoj6w%2FTbAKNTnx7oOmw%2BeAqF2a%2BBACbNKa33DZWbSnqFQpsIFQPZGfZq0zEt%2BR%2Ft2VEUHYmcgM23EYbSotGcan2PWYKdmR%2Bn8CSZqqn%2FHujKzrobVvQluF9Vj03elQNr%2FWNOvCynDSuRWP8D8vwE8gLYA3kDKm5N1E4i4VTJn%2BHuRxJXk37goCpmNhUOvcHzPwcSDS42rOMHEc5uvHEbtJpDN1YijiNYzP3LcVCUZxizgdI%2BZu9Zp1hC7dSTC4vjOs%2FH4C5R3JWFAJCIdvlWpcaPD6xyi0uvszFEW1M9YOwa9rEk3QNOtrcD0tjYS5hQwWLLK7KW84pN67LBsdGE3gYIk7RvQDtJhN7apaV5lm9Iz9sPFwqGtp7vmTvUO8iY%2BLwbupYx%2FS%2BsVpiToPYtctAsa%2BO9SzOjm8SoX7pMOJs7T6vwaMr6oBLOF%2B7bRa1WiUGBJ2uggiq%2BYCvC35lvuL1y7WVQsr5uO2qii0XBYyZyeyGXb8mDBwrzq2MuuO%2FcBBoKR%2FzvY6fCom8XHsVe2LSti73gNQPx5LpqQ9nFonryIfY1aYkOKZol%2FkNmZzjOYxeAIhj4DmATngizJEDMOPzwb4GOqUBUVezW7HQMy3Dyc1sTf0zSYBZ49dycBdY9MZ%2B%2FsqrOEa8meJGvcr%2BdpDO4uzfJS0UbOaZBtr5LF5%2FX01mRU7BD%2B09k54gyOk0abq8zpXOE5ZpwmKyTdf3RkfNv3jpBUvlZHdnMbJsevTk6H9CSMD917OLcsMRPK8l4wYFS8QB2dJaG%2F%2BlDfuFEOUeQYaksZ2esTTzSEEBSggxlVD0OaPqoLPvZKLJ&X-Amz-Signature=dac586e4267227e4b7161758d50fdb8cf51c8c1766985bcea0542d7f83fcaeda&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
