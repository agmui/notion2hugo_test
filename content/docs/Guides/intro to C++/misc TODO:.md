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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6MCMWE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg7UAAM1T1X4QnpWgJ8YFs%2F6Ye6uD3xr9JovEjkJzKrgIgSMXi7UWQu3VE4ybRMQ%2B6GMz%2Fa1BHAwabC1UhTG1Vm1AqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEjjAg7QetMYw0YKircAwUyCKlkLD3Z7VRqxIXQV9IufQt9rVcij8oZ3O0YArvMt3Ft46dsxi%2BGwjn5%2F2A0afLZDVpLSm%2BL7cqxtCalODW8xcGmCuIqr1u6Vg7GvUD2KtSKVAfVUrvmrUVsGSunJhKyz%2FyOPF0CVmaf4see0bI1%2Fe4hb%2FtA5jHMlr1tE%2F3ZQnW2BhWREpbH%2FWuHT8hkZ2g7jxO3hi6aV%2B0fRZX0Lw%2BRsLjS1Pkpw8s985seMIH3YCUd%2B0nxTeadw7gu1%2BsJwl5vD7rRaTBiDO4SabSWopmsSCo5cjX%2FsduZqFPVWksCj2E8A5zEIotxAGS0l%2Ft5gUnrWkaBXBMWec8yzjLTvAG29GzLKE%2B%2BXxyVYEDJoMZl2dSGdbd%2FUOHhkp3dHNDGzFW9LuVsxWIufBfnWFiXHxf7HIHlVtxjMrl7qJrx9aW0qvq2hoWcLKxGEY8NunFJCopjhBpqkmPDb238ve9VVS5ozCpc%2B2v3QRAS5iK6%2Fb%2FBn%2BppYERxVnvHHFHATh88PXuItxzotlfIC2duLppt4jWDfi3wFMfDkDiNHJ96yeaMLz20b1q%2FEhKbMMhbIbB9mqYiS%2BT%2FEXGcHmEprPJVF%2Fz%2B3SiTqRQqkqYTLA4Zxa87Cyn7uf2cYg5MY6AWMKrTrL0GOqUBiABip5D0qPabumNB0uxEdEGf52IQu8sthrjHdbk68iLbnyh2HI8U965dBAhSsxPRP%2B%2BE39u3rlxJUVXFR77JWeSiiLi3tyCx7vEqlitVvg12f86qfcr2mRCe8tlgREdg%2BUN%2BC3CpuACCrAw6J7jZMZOU5qx7NV5FZLVQkhULJl%2FeX9wGFhX%2BhWkv4oWWQGl7fYQKuryc7X%2BnDBAGVU5Qr6KVDfED&X-Amz-Signature=9a6343eb4d5d62e25f4c733a2787e8ae933643049101e275c72811c04431dd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE6MCMWE%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg7UAAM1T1X4QnpWgJ8YFs%2F6Ye6uD3xr9JovEjkJzKrgIgSMXi7UWQu3VE4ybRMQ%2B6GMz%2Fa1BHAwabC1UhTG1Vm1AqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEjjAg7QetMYw0YKircAwUyCKlkLD3Z7VRqxIXQV9IufQt9rVcij8oZ3O0YArvMt3Ft46dsxi%2BGwjn5%2F2A0afLZDVpLSm%2BL7cqxtCalODW8xcGmCuIqr1u6Vg7GvUD2KtSKVAfVUrvmrUVsGSunJhKyz%2FyOPF0CVmaf4see0bI1%2Fe4hb%2FtA5jHMlr1tE%2F3ZQnW2BhWREpbH%2FWuHT8hkZ2g7jxO3hi6aV%2B0fRZX0Lw%2BRsLjS1Pkpw8s985seMIH3YCUd%2B0nxTeadw7gu1%2BsJwl5vD7rRaTBiDO4SabSWopmsSCo5cjX%2FsduZqFPVWksCj2E8A5zEIotxAGS0l%2Ft5gUnrWkaBXBMWec8yzjLTvAG29GzLKE%2B%2BXxyVYEDJoMZl2dSGdbd%2FUOHhkp3dHNDGzFW9LuVsxWIufBfnWFiXHxf7HIHlVtxjMrl7qJrx9aW0qvq2hoWcLKxGEY8NunFJCopjhBpqkmPDb238ve9VVS5ozCpc%2B2v3QRAS5iK6%2Fb%2FBn%2BppYERxVnvHHFHATh88PXuItxzotlfIC2duLppt4jWDfi3wFMfDkDiNHJ96yeaMLz20b1q%2FEhKbMMhbIbB9mqYiS%2BT%2FEXGcHmEprPJVF%2Fz%2B3SiTqRQqkqYTLA4Zxa87Cyn7uf2cYg5MY6AWMKrTrL0GOqUBiABip5D0qPabumNB0uxEdEGf52IQu8sthrjHdbk68iLbnyh2HI8U965dBAhSsxPRP%2B%2BE39u3rlxJUVXFR77JWeSiiLi3tyCx7vEqlitVvg12f86qfcr2mRCe8tlgREdg%2BUN%2BC3CpuACCrAw6J7jZMZOU5qx7NV5FZLVQkhULJl%2FeX9wGFhX%2BhWkv4oWWQGl7fYQKuryc7X%2BnDBAGVU5Qr6KVDfED&X-Amz-Signature=63eb18c1627eb51fb7ea4af0530d045593c7e00356db4995682a1e51188db9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
