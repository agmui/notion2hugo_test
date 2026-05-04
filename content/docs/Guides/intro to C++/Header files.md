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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2DZGCU%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUxDUGlhQHJ8vaOxI%2FoyK320s5HQQR8t6LGkewRlP54AiEAlHzzP51Ti2K%2BFBluye7qQkQlrfyZKtjF0K0lycmhoywq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDDYzYRRBOB97nDVozyrcAzZC8sf83M77eMkL6YO%2FSXj3obiqHby2a%2FSaEq059JNja2TZTULdk3UUTd6ippN0LaJz3qIMCsBaKNam0jA5B7TpfHIN5%2FV%2FkDQKY29jg2GIHUvKVVe0fszx1U18eiKlxzJvjiEvQL2B4aNFz5RDkdi8VJqbzFCjGoazvBDa%2FXrnCXsCORNo7rlQKPy3arA5lI%2BLdaiLwS2oG2mc0niZfAWBvMoniyvgXniCVimCkqhh2jYXXUw4LCz7sA0t4vWaf8Xygtk5IMPFSulXIYsj%2B0MLVED6fNDsGmfGCok92VxqWpV2cckqGPK8mZcwNSHtqFgzRoOToi7vhhq9FbwdxR6oEoi%2BKzfvuhNr4JfS%2FO4fzg2UrznL1HJZFcvQxLhPRRL5bplpv4qzMQ7CngluslO1xTwHCrIW4ZbkD33aLKGDoMP1FwPCnI1BlojC3bzmvXfCihFXdMgH4a6JQoCvmi2mRg06DW1S0Ta9oTGueTOmQw1wBl%2Bvk08jbggqySvrzoeKfF%2FFYCqEXdLdzsE3zkdFQAqDyF0%2B8lBJ3P5U64aktHIoStcuDYzI4T9S%2F3taNW4WhpFP2wvYpj0q7nousfvlbP8c%2BKNnieB%2F6Pjlhw%2FyfOPOuFddz5VXo8fMMNuK4M8GOqUBiqJ%2FYTWwBRloIi5Rtk9T7eJ%2BMcMXp2xge7qMkmBgddh33J6KFqiYmEJ2f69aX6aWvdouN%2BwI5n3%2FofnSQuiFqiLDNacY1%2FdwdBTz8UjjFVNAB8PJBrmAbKbT3gA%2F2xu5OJ4swBHmmiXlACIbXGz7%2Fkx5Ej4S2384eC8ElVCulcssCvjKCnQlUD5miJwk1ArlOFXzFlRcrmWEwRcAiWpXRO3lvPO4&X-Amz-Signature=169cdced0a770e600c5e82bfca59661845ad216aed66544560016d0eef888309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
