---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}


### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3OBOOM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHDYJDIUCDyAQheFD57WYYd3NCLmuPfPnbHpoJh5JX38AiB4rr1NLbKiCmVuR2qSHOnyJZMRdzedTLrIwoVP%2FfYh1Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMksMBF2f%2Foye6Ml2AKtwDfbsZKaUVK0PnuwmOHzjBbYIwYAgDntPdqAZ%2FcRfNRaYsF1IyxXzFZzc8XMQ66Lg2N7nj4M5s4f93zl1aiWWD%2BQ3G4LApzb6lo7Be%2FreXl8%2FmdNpKhURTTnWA1L9K5ojV6iW3Aq1JN6rfoH33IrsMqBlDxHcQ27VzPFlVUmX0rJcAT1U5J6qXcCcUDDhEUCfaIsFFV2vvNPz9Wqvot9PkZuEwdHTUvQKHAvqG6HA4dWr1andy%2BFqK7v%2BzaqOVxUY9mc%2FPpLGhOJtvm8X4T8S0o0j4Ar68eQX4ArJmBulDjeLuIWRwSHKTsPtoB%2FERTz1GVVK3Y9Wy9X7vwkQaj7pe1EnXpIZdfJPw1v1Fxo15ISAIAkQ4%2B8sbliNMpOD7eterLVPm0z8q1s6HZXmiAhvZDUsA7r7OMbd6QyvqW0MKEyKdB8hVY2ZQ2tf1zMD%2BrySx%2BDz8z7QBT%2B%2BtUguILYa2aj%2BOkzrqQmuz82aLhWIfHFJZE3au46fEYWIZckSuGR85T%2FH2nLkGm%2B8RIn88L9WsUjW3E2JJ6mNmxPpIKxySZZwb%2BHJYdNzEsQvrhZ6iE47f7sQE%2BM492dFxPZj3bU5RT56juimrrBBJTSYkyW%2FcdWCjBn1szqs53dlANlYwsOiayAY6pgEFbxPjDbKUcYAXQetq78AyOrHsqtWiT8tnU0VdF1mdWeX65%2FnA%2Bwc7144x4CMuJDCf6PrJ6Ns%2B4H97DQel%2FEXkcwZfBIx7IPaqY429Bgd0PtiDMwNjy7okJag4O6zeG7Hbpr5AsCIqByDesdTFWQRR7eDNDA%2BSl7C5XBystwVj4d3ZUDWE7cxAGM9bosj2zs1EpEo3X9Vh7erN9VGh%2Bvu1tijwVPGR&X-Amz-Signature=e109cdba247ea252f3f39de9eed7247e27234c7829d37401f1a2d6e6bd9740ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3OBOOM%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHDYJDIUCDyAQheFD57WYYd3NCLmuPfPnbHpoJh5JX38AiB4rr1NLbKiCmVuR2qSHOnyJZMRdzedTLrIwoVP%2FfYh1Cr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMksMBF2f%2Foye6Ml2AKtwDfbsZKaUVK0PnuwmOHzjBbYIwYAgDntPdqAZ%2FcRfNRaYsF1IyxXzFZzc8XMQ66Lg2N7nj4M5s4f93zl1aiWWD%2BQ3G4LApzb6lo7Be%2FreXl8%2FmdNpKhURTTnWA1L9K5ojV6iW3Aq1JN6rfoH33IrsMqBlDxHcQ27VzPFlVUmX0rJcAT1U5J6qXcCcUDDhEUCfaIsFFV2vvNPz9Wqvot9PkZuEwdHTUvQKHAvqG6HA4dWr1andy%2BFqK7v%2BzaqOVxUY9mc%2FPpLGhOJtvm8X4T8S0o0j4Ar68eQX4ArJmBulDjeLuIWRwSHKTsPtoB%2FERTz1GVVK3Y9Wy9X7vwkQaj7pe1EnXpIZdfJPw1v1Fxo15ISAIAkQ4%2B8sbliNMpOD7eterLVPm0z8q1s6HZXmiAhvZDUsA7r7OMbd6QyvqW0MKEyKdB8hVY2ZQ2tf1zMD%2BrySx%2BDz8z7QBT%2B%2BtUguILYa2aj%2BOkzrqQmuz82aLhWIfHFJZE3au46fEYWIZckSuGR85T%2FH2nLkGm%2B8RIn88L9WsUjW3E2JJ6mNmxPpIKxySZZwb%2BHJYdNzEsQvrhZ6iE47f7sQE%2BM492dFxPZj3bU5RT56juimrrBBJTSYkyW%2FcdWCjBn1szqs53dlANlYwsOiayAY6pgEFbxPjDbKUcYAXQetq78AyOrHsqtWiT8tnU0VdF1mdWeX65%2FnA%2Bwc7144x4CMuJDCf6PrJ6Ns%2B4H97DQel%2FEXkcwZfBIx7IPaqY429Bgd0PtiDMwNjy7okJag4O6zeG7Hbpr5AsCIqByDesdTFWQRR7eDNDA%2BSl7C5XBystwVj4d3ZUDWE7cxAGM9bosj2zs1EpEo3X9Vh7erN9VGh%2Bvu1tijwVPGR&X-Amz-Signature=eeca267778da3ea998782507e49dec2991ec1edf5611f935b079b6b480278351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
