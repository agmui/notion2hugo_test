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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IY2CJJW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDig5Xv3CVxwtA3H6C%2FG%2FnCMThkB%2F8oYccpV00qS3H7jAiEA4NycA65np%2FFFW95WUKNDfeqJF%2FhzclT4tCn4pbzBo8gq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNK4aWMa%2Ba6Dws81VyrcAy75Zz7wSvPcUV86quqMQrCWHD1Ih9Jf5P9hLWAh77uFRFoDj%2Fp9T91v7ylcxJW8%2FOTSJU0x7tAA%2BAhkeLscfaCJi2e9lAg5KIZNgL5tEEFOdt28fVPfseRGDwE3FM6qaBj9ih%2F2pHSCItQRkVv%2F2VNUFEW5RVbxOrBUx1edPsOcTXjrLTnzOt09Z8CB6Ey88jAJNvPPW8ARO7FtQZeQ0SZ7QoMomgfYHmBAf1vFV3yTOTyZuOk2JK5RC4dud0Ys4H0qt2YRNGrA7yocsGYE%2BI1AfZx02teD7k2lu5MLNlObWm%2FyE%2Fwd0OwwR7QRpd7bimaP77P0%2BtXuHJhV5VKO2i9iw%2FU10A%2BLsv%2BiEfcQId48CBzGNqYiZjSVrq5TXduQrbkQhTaC7tmdWPiL8n9hZC%2BKWXdBUWR9vaHO2DhMQ500Z%2BVINhI8ucTd2CvcqlNTJkCjlMj2bwVxz4pA1uLPQuh1nDWZ1DHW0Vb2T%2FYaOvZHMBXOf9GtCpCi%2FmuncWr6C8byIHIc5GRqyrvLnaZ3%2BytahIv7JEYXcpx8CfZR%2B09tVzdswuT0uNlGc4vxGcGC93QepFSnwI6cUW4Tyl31lnsdyileMIJuBzikpNYR1LP%2ByaG3N1TYX4kU%2B5TqMPCQ3cMGOqUBwbMmjO3YxVZRWhjCJQxmzvTWmyBkKlAoblaL%2BcJph5%2FSjHGDJ%2FxcRrlxKKZkHbZLqNc8g7ciNs8JZ5XaOIo5fj6kvopEFtE9ISRrUoVR8CzZA8E7AeXIt2XWr2I%2FCSvhfyMBZPqPK%2FXtWZ1ZKVkme7asjY3PExY9FmgNFyEiX5mk4CO2oZjrpx%2BgrIElsfwzupgIWK%2ByHngoU7MmisSefMNxrCju&X-Amz-Signature=bb8a0eee3c5ccee48656659b26227184ac1180cf66bf0df6d0ae37ea7e1e10df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IY2CJJW%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDig5Xv3CVxwtA3H6C%2FG%2FnCMThkB%2F8oYccpV00qS3H7jAiEA4NycA65np%2FFFW95WUKNDfeqJF%2FhzclT4tCn4pbzBo8gq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNK4aWMa%2Ba6Dws81VyrcAy75Zz7wSvPcUV86quqMQrCWHD1Ih9Jf5P9hLWAh77uFRFoDj%2Fp9T91v7ylcxJW8%2FOTSJU0x7tAA%2BAhkeLscfaCJi2e9lAg5KIZNgL5tEEFOdt28fVPfseRGDwE3FM6qaBj9ih%2F2pHSCItQRkVv%2F2VNUFEW5RVbxOrBUx1edPsOcTXjrLTnzOt09Z8CB6Ey88jAJNvPPW8ARO7FtQZeQ0SZ7QoMomgfYHmBAf1vFV3yTOTyZuOk2JK5RC4dud0Ys4H0qt2YRNGrA7yocsGYE%2BI1AfZx02teD7k2lu5MLNlObWm%2FyE%2Fwd0OwwR7QRpd7bimaP77P0%2BtXuHJhV5VKO2i9iw%2FU10A%2BLsv%2BiEfcQId48CBzGNqYiZjSVrq5TXduQrbkQhTaC7tmdWPiL8n9hZC%2BKWXdBUWR9vaHO2DhMQ500Z%2BVINhI8ucTd2CvcqlNTJkCjlMj2bwVxz4pA1uLPQuh1nDWZ1DHW0Vb2T%2FYaOvZHMBXOf9GtCpCi%2FmuncWr6C8byIHIc5GRqyrvLnaZ3%2BytahIv7JEYXcpx8CfZR%2B09tVzdswuT0uNlGc4vxGcGC93QepFSnwI6cUW4Tyl31lnsdyileMIJuBzikpNYR1LP%2ByaG3N1TYX4kU%2B5TqMPCQ3cMGOqUBwbMmjO3YxVZRWhjCJQxmzvTWmyBkKlAoblaL%2BcJph5%2FSjHGDJ%2FxcRrlxKKZkHbZLqNc8g7ciNs8JZ5XaOIo5fj6kvopEFtE9ISRrUoVR8CzZA8E7AeXIt2XWr2I%2FCSvhfyMBZPqPK%2FXtWZ1ZKVkme7asjY3PExY9FmgNFyEiX5mk4CO2oZjrpx%2BgrIElsfwzupgIWK%2ByHngoU7MmisSefMNxrCju&X-Amz-Signature=c849ece2360e7770759b2fe91b76948eb988299b4448c79c4b73e3418d1793be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
