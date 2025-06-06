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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3R4KKCN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWndy64JGLYhqxGGdT4lSj6JOeOvkTMSJ7bPrAL2WJ%2BgIhAPntkfpGcg1cZH%2FGCBgrbf1I4N5OXtLdlSpaJ%2BpPhi8%2FKv8DCGUQABoMNjM3NDIzMTgzODA1IgykU3Oh9kSel6Ip7Jkq3AM57xth2i0THHc5J%2B6fE%2FrdOJCG78U5srQ1YzV2D7nogR%2FnnF7A9jXAPqxrZMNHR%2FLDo%2F48BRcwhlN7SFsWztzbUTw3RM5Kacz0jvG0k4TCRvodKkP%2F0mOKP3tegzZn3QS0gM8L6h%2Fh6dVISKmbszz%2BJbH%2FgWvmtCKD6BRGGtzfyi60%2FQlWdBBCPxCctwyd0xK9j%2BaS3zH1WurCojf6RkK9urP%2FtASNK%2Bg0vjAGGrlNaiTYpM%2Blgzf3vep0L8Sq7Tg41CsiG07%2FKIgUJISLT%2FA61Fk%2BIVUMbxxYI%2Be1ukREwI4SN71XcPaYW0WxEZ9AIRyVgiNm%2B3Ou81z7bcDDg5od5cMbkDjtT%2BacOTwS3%2FcEfdyEKeZxPovjcmlADxSzRRoiqWMCU7S3vnYTp%2FvunFBZK7qqkb6hTs6HFBOylNDidWpWAmAJvQk3t6vgjbH6FmSdEpV13FqtebPyCTvbnKFOgHkYlFrYG1ftvvkW4XBZwHKrnIcigStIFY8zJ1PLW%2BZnfPynwLZnMtFvRzvhmoCj6GA85r11WY7LGMG9oWS2GiFFohHPyTzEY9c7Ks0OQXi6IyMhuzDonIIwX%2BxLe6uruBp6oeb5VooLnkl3EuSie638B8hq7nSEerrDtTC9kY3CBjqkAUzsT55NlsTePaOWrUIgevZWQuLjCwnoYgpbvnGKMARxTduT%2Bxbht8Bm8S7LsraE4TO3yoGn3R6F8y%2BAu4yvG4ae2ePvgh4YI07rxZlrhiAbqZm783Ja7QmoRYKJC7kOk2gTKYVTsPlx9D3Bc%2BONrDR2Rbmi8YOfzTFmQckTFwWeGX7iTi4jJ6x02k3017bdFZtsYFlftPaNoLjRiAfi1KxSXb9v&X-Amz-Signature=f1dff2062c04ff8cfa2af54a439de12985446103d7bcf63a7bbcf6e946dd6f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
