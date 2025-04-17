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

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UU2RM4Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOiZJNtiHS4eOy2VQVE2CI7Gq2rsI8G5qef5V5NDXnCgIhAP2wu9N24L%2F0hWc0U6DUnUZY4oQvCXHaa1ADfFE%2FKVn%2BKv8DCFsQABoMNjM3NDIzMTgzODA1IgyGjBwgZbRPpKXKxrwq3AOB9BbclpCU3qTV6hAMxCf6NPcZcdhtsqen70JG30zE55zkTMRKdXz3OtmComxpFxpuZKtiL5RBM7y51E1nPWLqMrsPziKLbzNPbFMRsPWRtNugbxDbEfrxcHkYy%2FaBa7cRmyjKzmpnTlfUib68A5AksaMiWfCtohNTiK8NdaRms%2BQEyYteaFJjLok3uOl3aniUdQdLhDUMLO4%2FuxZeQnwa3MQLNFEjBIaLX9crJHxhXjp2aFhD72a2TK1M299yiXudVH0DUjE9u4gRWbAZdNyZzQEFQKhUAo9A4grS1SnpiM%2Fnk6PRRt57euZXYEsoQIEgvwKaLFQi6rb0vOfzdO9XBqne0sMQwtlxDcIyMoJCMvErcUu0TiwrFwsdQASikuh2RYejmv%2FcQLB190yO40RJP8MLKJE%2BPgVBFMtcsd5YgbZxI%2BFkkphK84FiaN9mVW8Op3Qz3WM%2Fyx2nOI56S0VK%2BqChzuAHOYdgKN2A0aruhVS8a%2BNzDJdTpAmqG3pZsYQxCJaGbtzgqC1v2m8%2BMnm4bSHeNiT8W9JYoQcCsD3uQWaayJt58mAdFDmE9RWYpJVkUc4XxRIFwfT%2FqWrJiwObIEl4M%2BMPF%2FWwL2S8e7mX6FIeUVs%2BJdj1TDY85jDOlIPABjqkAXw3sNcAfXeQSmqPNugNgXThsRxEV2%2BHhi3Z6xMJGUM5%2F7KX9uHctZByPlN7YI9zMe9%2F7Zpyu8LfNv7gWlwKJ99TxfsCsDbT%2BRsddIYP02UAjm7%2FqySibhdjjTYi2fEjD05D2ZfCM0whApp7pVEVDYyA3cOa1%2FoarSTJ7tqC5qsO8owjKinX6BWrN%2BiuzxC8kiXDzCC9NdSJHsgsyzTtclm7xn6D&X-Amz-Signature=28d63b64718d015df931a0519a0695976f7f367a5e17ae03234a0b36967f6201&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UU2RM4Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOiZJNtiHS4eOy2VQVE2CI7Gq2rsI8G5qef5V5NDXnCgIhAP2wu9N24L%2F0hWc0U6DUnUZY4oQvCXHaa1ADfFE%2FKVn%2BKv8DCFsQABoMNjM3NDIzMTgzODA1IgyGjBwgZbRPpKXKxrwq3AOB9BbclpCU3qTV6hAMxCf6NPcZcdhtsqen70JG30zE55zkTMRKdXz3OtmComxpFxpuZKtiL5RBM7y51E1nPWLqMrsPziKLbzNPbFMRsPWRtNugbxDbEfrxcHkYy%2FaBa7cRmyjKzmpnTlfUib68A5AksaMiWfCtohNTiK8NdaRms%2BQEyYteaFJjLok3uOl3aniUdQdLhDUMLO4%2FuxZeQnwa3MQLNFEjBIaLX9crJHxhXjp2aFhD72a2TK1M299yiXudVH0DUjE9u4gRWbAZdNyZzQEFQKhUAo9A4grS1SnpiM%2Fnk6PRRt57euZXYEsoQIEgvwKaLFQi6rb0vOfzdO9XBqne0sMQwtlxDcIyMoJCMvErcUu0TiwrFwsdQASikuh2RYejmv%2FcQLB190yO40RJP8MLKJE%2BPgVBFMtcsd5YgbZxI%2BFkkphK84FiaN9mVW8Op3Qz3WM%2Fyx2nOI56S0VK%2BqChzuAHOYdgKN2A0aruhVS8a%2BNzDJdTpAmqG3pZsYQxCJaGbtzgqC1v2m8%2BMnm4bSHeNiT8W9JYoQcCsD3uQWaayJt58mAdFDmE9RWYpJVkUc4XxRIFwfT%2FqWrJiwObIEl4M%2BMPF%2FWwL2S8e7mX6FIeUVs%2BJdj1TDY85jDOlIPABjqkAXw3sNcAfXeQSmqPNugNgXThsRxEV2%2BHhi3Z6xMJGUM5%2F7KX9uHctZByPlN7YI9zMe9%2F7Zpyu8LfNv7gWlwKJ99TxfsCsDbT%2BRsddIYP02UAjm7%2FqySibhdjjTYi2fEjD05D2ZfCM0whApp7pVEVDYyA3cOa1%2FoarSTJ7tqC5qsO8owjKinX6BWrN%2BiuzxC8kiXDzCC9NdSJHsgsyzTtclm7xn6D&X-Amz-Signature=809f232d1d3d394793d0b4505fd5b917b4e8f1ca47b699d96b61dde525f1f381&X-Amz-SignedHeaders=host&x-id=GetObject)

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
